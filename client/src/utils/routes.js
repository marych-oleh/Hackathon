import { CivilAccount, VolunteerAccount, Home, Login, Registration } from '../pages/pages.js';
import {
	CIVIL_ACCOUNT_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
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
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration,
	},
];
