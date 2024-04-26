import React, { useState, useEffect, useRef } from 'react';
import { GridAlgorithm, MarkerClusterer } from '@googlemaps/markerclusterer';
import {
	APIProvider,
	Map,
	AdvancedMarker,
	useMap,
} from '@vis.gl/react-google-maps';
import { points } from '../../utils/testData';

const HelpMap = () => {
	return (
		<APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
			<Map
				style={{ width: '100%', height: '100vh' }}
				defaultCenter={{ lat: 48.497, lng: 31.182 }}
				defaultZoom={5}
				gestureHandling={'greedy'}
				disableDefaultUI={true}
				mapId={'f5406d5474200872'}
				restriction={{
					latLngBounds: {
						east: 41.3614785833,
						north: 53.3350745713,
						south: 44.0807890155,
						west: 21.0856083513,
					},
					// strictBounds: true,
				}}
			>
				<Markers points={points} />
			</Map>
		</APIProvider>
	);
};

const Markers = ({ points }) => {
	const map = useMap();
	const [markers, setMarkers] = useState({});
	const clusterer = useRef(null);

	useEffect(() => {
		if (!map) return;
		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
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
					position={point}
					key={point.key}
					ref={(marker) => setMarkerRef(marker, point.key)}
				>
					<span style={{ fontSize: '2rem' }}>🌳</span>
				</AdvancedMarker>
			))}
		</>
	);
};

export default HelpMap;
