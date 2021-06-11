export default {
  accessToken: process.env.SB_CLIENT_ACCESS_TOKEN || '',
  oAuthToken: process.env.SB_MANAGEMENT_OAUTH_TOKEN || '',
  spaceId: process.env.SB_SPACE_ID || '',
  defaultLanguage: process.env.SB_DEFAULT_LANGUAGE || 'en',
  cacheProvider: 'memory',
  version: 'auto',
  disableManagementApi: true
}
