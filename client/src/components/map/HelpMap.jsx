import { Map } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/UI/loader/Loader';
import MapMarkers from '../../components/mapMarkers/MapMarkers';
import { useFetching } from '../../hooks/useFetching';
import { CivilRequestsAPI } from '../../http/civilRequestsAPI';
import './HelpMap.scss';

const HelpMap = ({ className, ...props }) => {
	const [points, selectedPoints] = useState([]);

	const [getAllPoints, isLoading, error] = useFetching(() => {
		CivilRequestsAPI.getAllOnMap().then((points) => {
			selectedPoints(points);
		});
	});

	useEffect(() => {
		getAllPoints();
	}, []);

	return (
		<Map
			{...props}
			className={
				'help-map ' + (className ?? '') + (isLoading ? ' loading' : '')
			}
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
			<div className="help-map__loader">
				<Loader></Loader>
			</div>
			<MapMarkers points={points} />
		</Map>
	);
};

export default HelpMap;
