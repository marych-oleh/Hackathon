import React from 'react';
import './PlaceFindInput.scss';
import Autocomplete from 'react-google-autocomplete';

/**
 *
 * @param {Object} Props
 * @param {string} Props.className
 * @param {(place: google.maps.places.PlaceResult) => {}} Props.onPlaceSelected
 * @returns
 */
const PlaceFindInput = ({ className, onPlaceSelected, ...props }) => {
	return (
		<Autocomplete
			{...props}
			className={'placeInput' + (className ?? '')}
			// apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
			onPlaceSelected={onPlaceSelected}
			options={{
				componentRestrictions: { country: 'ua' },
			}}
		/>
	);
};

export default PlaceFindInput;
