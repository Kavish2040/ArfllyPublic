import { ARTFLLY_ANONTOKEN } from '@/constants/apiRoutes';
import axios from 'axios';
import logger from '../../../../lib/logger';
import BaseMiddleware from '../../../../middleware/baseMiddleware';

const api = async (req, res) => {
    logger.defaultMeta.service = 'anonToken';
    try {
        await BaseMiddleware(req, res);

        switch (req.method) {
            case 'GET':
                logger.info('Requesting anonymous token');

                try {
                    const externalApiResponse = await axios.get(ARTFLLY_ANONTOKEN, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    });

                    logger.info('Successfully retrieved anonymous token');
                    res.status(200).json(externalApiResponse.data);
                } catch (error) {
                    logger.error(error);
                    res.status(500).json(error);
                }
                break;
            case 'POST':
                res.status(404).end();
                break;
            case 'PUT':
                res.status(404).end();
                break;
            case 'DELETE':
                res.status(404).end();
                break;
        }
    } catch (e) {
        logger.error('Something went wrong', e);
        res.status(500).json({ e });
    }
};

export default api;
