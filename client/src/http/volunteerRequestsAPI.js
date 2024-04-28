import { $authHost } from '.';

export class VolunteerRequestsAPI {
	/**
	 * Authorised API.
	 * Get all civil`s requests
	 * @param {string} civilUserId - id of civil
	 * @returns {Promise<import('../types').InfoVolunteerResponse[]>}
	 */
	static async getAllUserRequests(civilUserId) {
		const response = await $authHost.get(
			'civil-request/getAllRequests/' + civilUserId
		);
		console.log(response);
		const data = response.data;
		return data;
	}

	/**
	 * Authorised API.
	 * Create new civil request
	 * @param {import('../types').InfoVolunteerRequest} infoVolunteer - created requests
	 */
	static async addNewInfoVolunteerRequest(infoVolunteer) {
		const response = await $authHost.post(
			'civil-request/add/',
			infoVolunteer
		);
		console.log(response);
		return response;
	}
}
