import { InfoWindow } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';
import React from 'react';
import './MapInfoWindow.scss';

/**
 * @param {Object} Props
 * @param {import('../../../types').MapLocationMarker} Props.point
 * @param {() => {}} Props.closeInfoWindow
 * @returns
 */
const MapInfoWindow = ({ point, closeInfoWindow }) => {
	return (
		<InfoWindow
			ariaLabel={point.location.locationName}
			position={point.location.coordinates}
			onCloseClick={closeInfoWindow}
		>
			<div className="info-window">
				<div className="info-window__text">
					У {point.location.locationName} є{' '}
					{point.amountOfRequestsInLocation} запитів
				</div>
				<div className="info-window__link">
					<Link>Допомогти</Link>
				</div>
			</div>
		</InfoWindow>
	);
};

export default MapInfoWindow;
