import { Map } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';
import MapMarkers from '../../components/mapMarkers/MapMarkers';
import './MainMap.scss';
import MapInfoWindow from './mapInfoWindow/MapInfoWindow';
import { useFetching } from '../../hooks/useFetching';
import { CivilRequestsAPI } from '../../http/civilRequestsAPI';
import Loader from '../../components/UI/loader/Loader';

const MainMap = () => {
	const [infowindowShown, setInfowindowShown] = useState(false);
	/** @type {[import('../../types').MapLocationMarker, React.Dispatch<React.SetStateAction<import('../../types').MapLocationMarker | null>]} */
	const [selectedPoint, setSelectedPoint] = useState({});
	const [points, selectedPoints] = useState([]);

	const [getAllPoints, isLoading, error] = useFetching(() => {
		CivilRequestsAPI.getAllOnMap().then((points) => {
			selectedPoints(points);
		});
	});

	useEffect(() => {
		getAllPoints();
	}, []);

	const toggleInfoWindow = (point = null) => {
		setSelectedPoint(point);
		setInfowindowShown((previousState) => point || !previousState);
	};

	const closeInfoWindow = () => setInfowindowShown(false);

	return (
		<Map
			className={'map' + (isLoading ? ' loading' : '')}
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
			<div className="map__loader">
				<Loader></Loader>
			</div>
			<MapMarkers onMarkerClick={toggleInfoWindow} points={points} />
			{infowindowShown && (
				<MapInfoWindow
					closeInfoWindow={closeInfoWindow}
					point={selectedPoint}
				/>
			)}
		</Map>
	);
};

export default MainMap;
