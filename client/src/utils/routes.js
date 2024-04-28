import { Navigate } from 'react-router-dom';
import {
	CivilAccount,
	VolunteerAccount,
	Home,
	Login,
	MainMap,
	Registration,
	CivilRequestsPage,
} from '../pages/pages.js';
import {
	CIVIL_ACCOUNT_ROUTE,
	CIVIL_REQUESTS_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	MAP_ROUTE,
	ACCOUNT_ROUTE,
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
];
