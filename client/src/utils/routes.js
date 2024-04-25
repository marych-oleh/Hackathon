import {
	Account,
	Home,
	Login,
	Registration,
} from '../pages/pages.js';
import {
	ACCOUNT_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE
} from './paths.js';

export const authRoutes = [
	{
		path: ACCOUNT_ROUTE,
		Component: Account,
	},
];

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
