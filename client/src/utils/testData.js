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
		civilUser: {
			id: 1,
			userName: "James bond",
			email: "bober@gmail.com",
			phoneNumber: "+380965619259"
		},
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
		civilUser: {
			id: 1,
			userName: "James bond",
			email: "bober@gmail.com",
			phoneNumber: "+380965619259"
		},
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
				volunteerUser: {
					volunteerUserId: 1,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
		],
	},
	{
		civilUser: {
			id: 1,
			userName: "James bond",
			email: "bober@gmail.com",
			phoneNumber: "+380965619259"
		},
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
				volunteerUser: {
					volunteerUserId: 1,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
			{
				volunteerUser: {
					volunteerUserId: 2,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-30T12:00:00Z'),
			},
		],
	},
	{
		civilUser: {
			id: 1,
			userName: "James bond",
			email: "bober@gmail.com",
			phoneNumber: "+380965619259"
		},
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
				volunteerUser: {
					volunteerUserId: 1,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-29T12:00:00Z'),
			},
			{
				volunteerUser: {
					volunteerUserId: 2,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
				comment:
					'Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу Я допоможу',
				dateOfAcceptation: new Date('2024-04-30T12:00:00Z'),
			},
			{
				volunteerUser: {
					volunteerUserId: 3,
					phoneNumber: '+380965619259',
					email: 'bober@gmail.com',
					userName: 'poroshenko bober fond',
				},
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

export const tags = [
	{ value: 'Вода', label: 'Вода' },
	{ value: 'Їжа', label: 'Їжа' },
	{ value: 'Одяг', label: 'Одяг' },
	{ value: 'Медикаменти', label: 'Медикаменти' },
	{ value: 'Інше', label: 'Інше' },
];