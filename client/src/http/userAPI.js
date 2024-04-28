import { jwtDecode } from 'jwt-decode';
import { $host } from '.';

export class UserAPI {
	static TOKEN_NAME = 'helpinua-token';
	static async registration(registerRequest) {
		const response = await $host.post('auth/register', {
			...registerRequest,
		});
		const data = response.data;
		const token = data.token;
		localStorage.setItem(UserAPI.TOKEN_NAME, token);
		return jwtDecode(token);
	}

	static async login(email, password) {
		const response = await $host.post('auth/authenticate', {
			email,
			password,
		});
		const data = response.data;
		const token = data.token;
		localStorage.setItem(UserAPI.TOKEN_NAME, token);
		return jwtDecode(token);
	}
}
