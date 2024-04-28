import {
	CivilAccount,
	CivilRequestsPage,
	Home,
	Login,
	MainMap,
	Registration,
	RegistrationCivil,
	RegistrationVolunteer,
	VolunteerAccount,
} from '../pages/pages.js';
import {
	CIVIL_ACCOUNT_ROUTE,
	CIVIL_REQUESTS_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	MAP_ROUTE,
	REGISTRATION_CIVIL_ROUTE,
	REGISTRATION_ROUTE,
	REGISTRATION_VOLUNTEER_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
} from './paths.js';

export const authRoutes = {
	civilRoutes: [
		{
			path: CIVIL_ACCOUNT_ROUTE,
			Component: CivilAccount,
		},
	],
	volunteerRoutes: [
		{
			path: VOLUNTEER_ACCOUNT_ROUTE,
			Component: VolunteerAccount,
		},
	],
};

export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: Home,
	},
	{
		path: MAP_ROUTE,
		Component: MainMap,
	},
	{
		path: CIVIL_REQUESTS_ROUTE,
		Component: CivilRequestsPage,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration,
	},
	{
		path: REGISTRATION_CIVIL_ROUTE,
		Component: RegistrationCivil,
	},
	{
		path: REGISTRATION_VOLUNTEER_ROUTE,
		Component: RegistrationVolunteer,
	},
];
