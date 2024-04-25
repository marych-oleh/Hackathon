import { makeAutoObservable } from 'mobx';

export class UserStore {
	constructor() {
		this._isAuth = false;
		this._userData = {}; //{ role: 'Admin' };
		makeAutoObservable(this);
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
