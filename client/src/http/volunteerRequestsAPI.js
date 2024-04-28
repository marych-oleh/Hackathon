export class VolunteerRequestsAPI {
	/**
	 * Authorised API.
	 * Create new volunteer info ( request to help )
	 * @param {import('../types').InfoVolunteerRequest} infoVolunteer - created requests
	 */
	static async addVolunteerToRequest(infoVolunteer) {
		const response = await $authHost.post(
			'civil-request/addInfoVolunteer/',
			infoVolunteer
		);
		console.log(response);
		return response;
	}
}
