import React from 'react';
import './MapMarker.scss';

const MapMarker = ({ amountOfRequestsInLocation }) => {
	return (
		<div className="map-marker">
			<span className="map-marker__content">
				{amountOfRequestsInLocation}
			</span>
		</div>
	);
};

export default MapMarker;
