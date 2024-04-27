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

export const CivilRequestResponse = [
	{
		civilUserId: 1,
		civilRequestId: 1,
		tags: ['Вода', 'Їжа'],
		status: 'NOT_TAKEN',
		description:
			'будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть',
		location: {
			locationName: 'Zolochiv',
			coordinates: {
				lat: 100,
				lng: 100,
			},
		},
		dateOfCreation: new Date('2024-04-27T12:00:00Z'),
		infoVolunteers: [],
	},
	{
		civilUserId: 1,
		civilRequestId: 2,
		tags: ['Одяг', 'Телевізор', 'Крісло'],
		status: 'TAKEN',
		description:
			'будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть',
		location: {
			locationName: 'Zolochiv',
			coordinates: {
				lat: 100,
				lng: 100,
			},
		},
		dateOfCreation: new Date('2024-04-27T12:00:00Z'),
		infoVolunteers: [
			{
				volunteerUserId: 1,
				userName: 'poroshenko hui fond',
				email: 'hui@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
		],
	},
	{
		civilUserId: 1,
		civilRequestId: 3,
		tags: ['Плитка'],
		status: 'TAKEN',
		description:
			'будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть',
		location: {
			locationName: 'Zolochiv',
			coordinates: {
				lat: 100,
				lng: 100,
			},
		},
		dateOfCreation: new Date('2024-04-27T12:00:00Z'),
		infoVolunteers: [
			{
				volunteerUserId: 1,
				userName: 'poroshenko hui fond',
				email: 'hui@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
			{
				volunteerUserId: 2,
				userName: 'chervoniy hrest fond',
				email: 'hrest@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-30T12:00:00Z'),
			},
		],
	},
	{
		civilUserId: 1,
		civilRequestId: 4,
		tags: ['Сантехніка'],
		status: 'TAKEN',
		description:
			'будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть будь ласка допоможіть',
		location: {
			locationName: 'Zolochiv',
			coordinates: {
				lat: 100,
				lng: 100,
			},
		},
		dateOfCreation: new Date('2024-04-27T12:00:00Z'),
		infoVolunteers: [
			{
				volunteerUserId: 1,
				userName: 'poroshenko hui fond',
				email: 'hui@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
			{
				volunteerUserId: 2,
				userName: 'chervoniy hrest fond',
				email: 'hrest@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-30T12:00:00Z'),
			},
			{
				volunteerUserId: 3,
				userName: 'Sergiy Prytyla fond',
				email: 'prytyla@gmail.com',
				phoneNumber: '+380965619259',
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T11:00:00Z'),
			},
		],
	},
];

export const UserInfo = {
	userId: 1,
	userName: 'Petrik Vladislav',
	email: 'Petrik@gmail.com',
	phoneNumber: '+380965619259',
};
