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
 * @property {number} civilUserId
 * @property {Location} location
 * @property {"NOT_TAKEN"|"TAKEN"} status
 * @property {string} description
 */

/**
 * @typedef {Object} MapLocationMarker
 * @property {Location} location
 * @property {number} amountOfRequestsInLocation
 */

/**
 * @typedef {Object} InfoVolunteerRequest
 * @property {number} volunteerUserId
 * @property {number} civilRequestId
 * @property {string} comment
 */

/**
 * @typedef {Object} InfoVolunteerResponse
 * @property {number} volunteerUserId
 * @property {string} comment
 * @property {Date} dateOfAcceptation
 */

/**
 * @typedef {Object} CivilRequestResponse
 * @property {string[]} tags
 * @property {number} civilUserId
 * @property {number} civilRequestId
 * @property {Location} location
 * @property {"NOT_TAKEN"|"TAKEN"} status
 * @property {Date} dateOfCreation
 * @property {string} description
 * @property {InfoVolunteerResponse[]} infoVolunteers
 */
