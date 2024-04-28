import { $authHost, $host } from '.';

export class CivilRequestsAPI {
	/**
	 * Not authorised API.
	 * Get all requests grouped by the same location
	 * To display on map
	 * @param {string[]} tags - tags by which requests display
	 * @returns {Promise<import('../types').MapLocationMarker[]>}
	 */
	static async getAllOnMap(tags) {
		const response = await $host.get('civil-request/getAllBy', {
			params: { tags },
		});
		console.log(response);
		const data = response.data;
		return data;
	}

	/**
	 * Not authorised API.
	 * Get all requests by location
	 * Used in CivilRequestsPage.jsx
	 * @param {string} locationName - name of location by which requests are shown
	 * @returns {Promise<import('../types').CivilRequestResponse[]>}
	 */
	static async getAllByLocation(locationName) {
		const response = await $host.get(
			'civil-request/getAllRequests/' + locationName
		);
		console.log(response);
		const data = response.data;
		return data;
	}

	/**
	 * Authorised API.
	 * Get all civil`s requests
	 * @param {string} civilUserId - id of civil
	 * @returns {Promise<import('../types').CivilRequestResponse[]>}
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
	 * @param {import('../types').CivilRequest} civilRequest - created requests
	 */
	static async addNewCivilRequest(civilRequest) {
		const response = await $authHost.post('civil-request/add/', civilRequest);
		console.log(response);
		return response;
	}

	/**
	 * Authorised API.
	 * Delete request by id
	 * @param {string} civilRequestId - id of request to delete
	 */
	static async deleteUserRequest(civilRequestId) {
		const response = await $authHost.delete(
			'civil-request/getAllRequests/' + civilRequestId
		);
		console.log(response);
		const data = response.data;
		return data;
	}
}
