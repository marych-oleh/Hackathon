import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import React, { useEffect, useRef, useState } from 'react';
import MapMarker from '../../components/UI/mapMarker/MapMarker';

const renderer = {
	render({ markers, position }, stats) {
		const count = markers.reduce(
			(acc, curr) => acc + curr.amountOfRequestsInLocation,
			0
		);
		// change color if this cluster has more markers than the mean cluster
		const color =
			count > Math.max(10, stats.clusters.markers.mean) ?
				'#ff0000'
			:	'#0000ff';
		// create svg literal with fill color
		const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
		const title = `Cluster of ${count} markers`,
			// adjust zIndex to be above other markers
			zIndex = Number(window.google.maps.Marker.MAX_ZINDEX) + count;
		const clusterOptions = {
			position,
			zIndex,
			title,
			icon: {
				url: `data:image/svg+xml;base64,${btoa(svg)}`,
				anchor: new window.google.maps.Point(25, 25),
			},
		};
		return new window.google.maps.Marker(clusterOptions);
	},
};

/**
 *
 * @param {Object} Props
 * @param {import('../../types').MapLocationMarker[]} Props.points
 * @param {() => {}} Props.onMarkerClick
 * @returns
 */
const MapMarkers = ({ points, onMarkerClick }) => {
	const map = useMap();
	const [markers, setMarkers] = useState({});
	const clusterer = useRef(null);

	useEffect(() => {
		if (!map) return;
		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({
				map,
				renderer,
			});
		}
	}, [map]);

	useEffect(() => {
		clusterer.current?.clearMarkers();
		clusterer.current?.addMarkers(Object.values(markers));
	}, [markers]);

	const setMarkerRef = (marker, key) => {
		if (marker && markers[key]) return;
		if (!marker && !markers[key]) return;

		setMarkers((prev) => {
			if (marker) {
				return { ...prev, [key]: marker };
			} else {
				const newMarkers = { ...prev };
				delete newMarkers[key];
				return newMarkers;
			}
		});
	};

	return (
		<>
			{points.map((point) => (
				<AdvancedMarker
					position={point.location.coordinates}
					key={point.location.locationName}
					ref={(marker) => {
						if (marker) {
							marker.amountOfRequestsInLocation =
								point.amountOfRequestsInLocation;
						}
						setMarkerRef(marker, point.location.locationName);
					}}
					onClick={() => {
						if (onMarkerClick) onMarkerClick(point);
					}}
					amountOfRequestsInLocation={point.amountOfRequestsInLocation}
				>
					<MapMarker
						amountOfRequestsInLocation={point.amountOfRequestsInLocation}
					/>
				</AdvancedMarker>
			))}
		</>
	);
};

export default MapMarkers;
