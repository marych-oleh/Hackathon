import { APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import { points } from '../../utils/testData';
import './MainMap.scss';
import MapMarkers from '../../components/mapMarkers/MapMarkers';
import MapInfoWindow from './mapInfoWindow/MapInfoWindow';

const MainMap = () => {
	const [infowindowShown, setInfowindowShown] = useState(false);
	/** @type {[import('../../types').MapLocationMarker, React.Dispatch<React.SetStateAction<import('../../types').MapLocationMarker | null>]} */
	const [selectedPoint, setSelectedPoint] = useState({});

	const toggleInfoWindow = (point = null) => {
		setSelectedPoint(point);
		setInfowindowShown((previousState) => point || !previousState);
	};

	const closeInfoWindow = () => setInfowindowShown(false);

	return (
		<APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
			<Map
				className="map"
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
				<MapMarkers onMarkerClick={toggleInfoWindow} points={points} />
				{infowindowShown && (
					<MapInfoWindow
						closeInfoWindow={closeInfoWindow}
						point={selectedPoint}
					/>
				)}
			</Map>
		</APIProvider>
	);
};

export default MainMap;
