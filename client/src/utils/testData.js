const locations = [
	// { key: 'Lviv', lat: 49.8397, lng: 24.0297 },
	// { key: 'Ivano-Frankivsk', lat: 48.9226, lng: 24.7111 },
	// { key: 'Chernivtsi', lat: 48.2921, lng: 25.9359 },
	// { key: 'Uzhhorod', lat: 48.6167, lng: 22.3 },
	// { key: 'Mukachevo', lat: 48.4405, lng: 22.7171 },
	// { key: 'Kamianets-Podilskyi', lat: 48.6799, lng: 26.5809 },
	// { key: 'Ternopil', lat: 49.5535, lng: 25.5948 },
	// { key: 'Ivano-Frankivsk', lat: 48.9226, lng: 24.7111 },
	// { key: 'Rakhiv', lat: 48.0461, lng: 24.2134 },
	// { key: 'Chortkiv', lat: 49.0167, lng: 25.7992 },
	// // Central Ukraine
	// { key: 'Kyiv', lat: 50.4501, lng: 30.5234 },
	// { key: 'Cherkasy', lat: 49.4444, lng: 32.0597 },
	// { key: 'Zhytomyr', lat: 50.2547, lng: 28.6587 },
	// { key: 'Vinnytsia', lat: 49.2331, lng: 28.4682 },
	// { key: 'Poltava', lat: 49.5937, lng: 34.5407 },
	// { key: 'Kropyvnytskyi', lat: 48.5044, lng: 32.26 },
	// { key: 'Sumy', lat: 50.9077, lng: 34.7981 },
	// { key: 'Myrhorod', lat: 49.9589, lng: 33.6145 },
	// { key: 'Kremenchuk', lat: 49.0736, lng: 33.4235 },
	// { key: 'Bila Tserkva', lat: 49.7996, lng: 30.1128 },
	// // Southern Ukraine
	// { key: 'Odessa', lat: 46.4694, lng: 30.74 },
	// { key: 'Kherson', lat: 46.6354, lng: 32.6169 },
	// { key: 'Nikolaev', lat: 46.975, lng: 31.9946 },
	// { key: 'Zaporizhzhia', lat: 47.8388, lng: 35.1396 },
	// { key: 'Melitopol', lat: 46.8497, lng: 35.3656 },
	// { key: 'Simferopol', lat: 44.9521, lng: 34.1024 },
	// { key: 'Yalta', lat: 44.4989, lng: 34.1658 },
	// { key: 'Sevastopol', lat: 44.6166, lng: 33.5254 },
	// { key: 'Feodosia', lat: 45.0328, lng: 35.3791 },
	// { key: 'Kerch', lat: 45.3531, lng: 36.4752 },
	// // Eastern Ukraine
	// { key: 'Kharkiv', lat: 49.9935, lng: 36.2304 },
	// { key: 'Donetsk', lat: 48.0159, lng: 37.8029 },
	// { key: 'Luhansk', lat: 48.574, lng: 39.3079 },
	// { key: 'Dnipro', lat: 48.4647, lng: 35.0462 },
	// { key: 'Kramatorsk', lat: 48.7194, lng: 37.5585 },
	// { key: 'Mariupol', lat: 47.0984, lng: 37.5437 },
	// { key: 'Zaporizhzhia', lat: 47.8388, lng: 35.1396 },
	// { key: 'Kropyvnytskyi', lat: 48.5044, lng: 32.26 },
	// { key: 'Poltava', lat: 49.5937, lng: 34.5407 },
	// { key: 'Kherson', lat: 46.6354, lng: 32.6169 },
	// // Northern Ukraine
	// { key: 'Chernihiv', lat: 51.4981, lng: 31.2881 },
	// { key: 'Chernobyl', lat: 51.2763, lng: 30.2219 },
	// { key: 'Gomel', lat: 52.4345, lng: 30.9754 },
	// { key: 'Prypyat', lat: 51.4045, lng: 30.0542 },
	// { key: 'Slavutych', lat: 51.5243, lng: 30.7233 },
	// { key: 'Sumy', lat: 50.9077, lng: 34.7981 },
	// { key: 'Zhytomyr', lat: 50.2547, lng: 28.6587 },
	// { key: 'Kiev', lat: 50.4501, lng: 30.5234 },
	// { key: 'Bila Tserkva', lat: 49.7996, lng: 30.1128 },
	// { key: 'Vyshhorod', lat: 50.5866, lng: 30.4966 },
	// // Crimean Peninsula
	// { key: 'Yalta', lat: 44.4989, lng: 34.1658 },
	// { key: 'Sevastopol', lat: 44.6166, lng: 33.5254 },
	// { key: 'Simferopol', lat: 44.9521, lng: 34.1024 },
	// { key: 'Kerch', lat: 45.3531, lng: 36.4752 },
	// { key: 'Feodosia', lat: 45.0328, lng: 35.3791 },
	// { key: 'Alupka', lat: 44.416, lng: 34.0405 },
	// { key: 'Alushta', lat: 44.6766, lng: 34.41 },
];

function generateRandomLatitude() {
	return 47.1419 + Math.random() * (49.3791 - 47.1419);
}
function generateRandomLongitude() {
	return 35.1371 + Math.random() * (40.1593 - 35.1371);
}
function generateRandomPoint() {
	let lat = generateRandomLatitude(),
		lng = generateRandomLongitude();
	return {
		key: Date.now() * lat + lng,
		lat,
		lng,
	};
}
for (let i = 0; i < 500; i++) {
	locations.push(generateRandomPoint());
}

export const points = locations;
