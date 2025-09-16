import jwt from 'jsonwebtoken';

export const verifyJwt = async (jwtToken) => {
    const results = {
        valid: false,
        message: '',
    };

    if (!jwtToken) {
        results.message = 'Missing auth token!';
        return results;
    }

    try {
        jwt.verify(jwtToken, process.env.JWT_SECRET);
        results.valid = true;
        return results;
    } catch (err: any) {
        results.message = err.message;
        return results;
    }
};
