import {
	APIProvider,
	Map
} from '@vis.gl/react-google-maps';
import React from 'react';
import { points } from '../../utils/testData';
import MapMarkers from '../mapMarkers/MapMarkers';

const HelpMap = () => {
	return (
		<APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
			<Map
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
				<MapMarkers points={points} />
			</Map>
		</APIProvider>
	);
};

export default HelpMap;
