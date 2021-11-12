// ------------------------------------
// General configs
// ------------------------------------

/**
 * @type {string} - staging or production
 */
export const environment = process.env.REACT_APP_ENV

/**
 * Default server API url
 * @type {string}
 */
export const serverUrl = process.env.REACT_APP_SERVER_URL

/**
 * Uri of the server, where the API is set
 * @type {string}
 */
const apiUri = process.env.REACT_APP_APP_URI

/**
 * API url
 *
 * It's defined by the above settings,
 * so please refer to `serverUrl` and `apiUri` documentation
 *
 * @type {string}
 */
export const apiUrl = `${serverUrl}${apiUri}`
