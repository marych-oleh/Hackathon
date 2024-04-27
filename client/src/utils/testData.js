/**@type {import("../types").MapLocationMarker[]} */
const locations = [];

function generateRandomLatitude() {
	return 47.1419 + Math.random() * (49.3791 - 47.1419);
}
function generateRandomLongitude() {
	return 35.1371 + Math.random() * (40.1593 - 35.1371);
}

/**
 *
 * @returns {import("../types").MapLocationMarker}
 */
function generateRandomPoint() {
	let lat = generateRandomLatitude(),
		lng = generateRandomLongitude();
	return {
		location: {
			locationName: Date.now() * lat + lng,
			coordinates: {
				lat,
				lng,
			},
		},
		amountOfRequestsInLocation: Math.floor(Math.random() * 10 + 1),
	};
}
for (let i = 0; i < 10; i++) {
	locations.push(generateRandomPoint());
}

export const points = locations;
