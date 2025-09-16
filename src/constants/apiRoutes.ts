// NextJS Routes
export const LOGIN = `/api/v1/session/login`;
export const ANON_TOKEN = '/api/v1/anonToken';
export const SEARCH = '/api/v1/search';

// Server Routes
const server = 'https://artflly-api.azurewebsites.net'; // process.env.NEXT_PUBLIC_ARTFLLY_SERVER;
export const ARTFLLY_ANONTOKEN = `${server}/web/getanontoken`;
export const ARTFLLY_SEARCH = `${server}/buyer/search`;
export const ARTFLLY_ART = `${server}/web/art`;
export const ARTFLLY_GALLERY = `${server}/web/gallerywithart`;
export const ARTFLLY_ARTIST = `${server}/web/artistwithart`;
export const ARTFLLY_LOGIN_PLAYFAB = `${server}/buyer/auth/playfab`;
export const ARTFLLY_FAVORITE = `${server}/buyer/favorites/add`;
export const ARTFLLY_FOLLOW = `${server}/buyer/follows/add`;
