import axios from 'axios';
import { UserAPI } from './userAPI';

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL + 'api/v1/',
});

const $authHost = axios.create({
	baseURL: process.env.REACT_APP_API_URL + 'api/v1/',
});

const authInterceptor = (config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem(UserAPI.TOKEN_NAME)}`;
	return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
