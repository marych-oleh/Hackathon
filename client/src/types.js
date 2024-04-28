/**
 * @typedef {Object} LatLngLiteral
 * @property {number} lat - Latitude
 * @property {number} lng - Longitude
 */

/**
 * @typedef {Object} Location
 * @property {string} locationName - Lviv
 * @property {LatLngLiteral} coordinates
 */

/**
 * @typedef {Object} CivilRequest
 * @property {string[]} tags
 * @property {string} civilUserId
 * @property {Location} location
 * @property {string} description
 */

/**
 * @typedef {Object} MapLocationMarker
 * @property {Location} location
 * @property {number} amountOfRequestsInLocation
 */

/**
 * @typedef {Object} InfoVolunteerRequest
 * @property {string} volunteerUserId
 * @property {string} civilRequestId
 * @property {string} comment
 */

/**
 * @typedef {Object} InfoVolunteerResponse
 * @property {string} volunteerUserId
 * @property {string} comment
 * @property {Date} dateOfAcceptation
 */

/**
 * @typedef {Object} CivilRequestResponse
 * @property {string[]} tags
 * @property {string} civilUserId
 * @property {string} civilRequestId
 * @property {Location} location
 * @property {"NOT_TAKEN"|"TAKEN"} status
 * @property {Date} dateOfCreation
 * @property {string} description
 * @property {InfoVolunteerResponse[]} infoVolunteers
 */

export const VOLUNTEER = 'USER_VOLUNTEER';
export const CIVIL = 'USER_CIVIL';

/**
 * @typedef {Object|null} UserData
 * @property {'USER_VOLUNTEER'|'USER_CIVIL'} role
 * @property {string} userId
 */
