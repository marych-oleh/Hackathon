import { makeAutoObservable } from 'mobx';
import { UserAPI } from '../http/userAPI';
import { verifyJWT } from '../utils/functions';
import { jwtDecode } from 'jwt-decode';

export class UserStore {
	constructor() {
		this._isAuth = false;
		/**@type {import('../types').UserData|null} */
		this._userData = {};
		const token = localStorage.getItem(UserAPI.TOKEN_NAME);
		if (token && verifyJWT(token)) {
			this._isAuth = true;
			this._userData = jwtDecode(token);
		}
		makeAutoObservable(this);
	}

	exitAccount() {
		this._isAuth = false;
		this._userData = {};
		localStorage.removeItem(UserAPI.TOKEN_NAME);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}
	setUserData(userData) {
		this._userData = userData;
	}

	get isAuth() {
		return this._isAuth;
	}
	get userData() {
		return this._userData;
	}
}
