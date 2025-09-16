import { verifyJwt } from '../lib/openId';

export const AUTH_REQUIRED = true;

const BaseMiddleware = async (req, res, authRequired = false) => {
    try {
        req.authorized = { valid: true };

        let jwtToken = req.headers['x-access-token'] || req.headers.authorization;

        if (jwtToken && jwtToken.startsWith('Bearer ')) {
            jwtToken = jwtToken.slice(7, jwtToken.length);
        }

        const tokenParts = jwtToken ? jwtToken.split('.') : [];
        req.tokenPayload = tokenParts[1] ? JSON.parse(Buffer.from(tokenParts[1], 'base64').toString()) : null;
        req.jwtToken = jwtToken;

        if (authRequired) {
            req.authorized = await verifyJwt(jwtToken);
        }
    } catch (e) {
        return e;
    }
};

export default BaseMiddleware;
