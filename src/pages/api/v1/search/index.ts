import { ARTFLLY_SEARCH } from '@/constants/apiRoutes';
import axios from 'axios';
import logger from '../../../../lib/logger';
import BaseMiddleware from '../../../../middleware/baseMiddleware';

const api = async (req, res) => {
    logger.defaultMeta.service = 'search';
    try {
        await BaseMiddleware(req, res);
        const { body } = req;
        const { searchValue, anonToken, authToken, type } = body;

        switch (req.method) {
            case 'GET':
                res.status(404).end();
                break;
            case 'POST':
                if (anonToken || authToken) {
                    logger.info('Searching all artists/galleries');
                    try {
                        const Authorization = authToken ? `Bearer ${authToken}` : `Bearer ${anonToken}`;
                        const params = {
                            noCache: true,
                            headers: {
                                Authorization,
                                'Content-Type': 'application/json',
                                'Cache-Control': 'no-cache',
                                Pragma: 'no-cache',
                            },
                        };

                        const result = await axios.post(`${ARTFLLY_SEARCH}`, { rawText: searchValue }, params);
                        const { data, status } = result;
                        if (status === 200) {
                            logger.info(`Search has been completed`);
                            const { listings } = data;
                            if (type === 'art') {
                                res.json({ art: listings, galleries: [], artists: [], museums: [] });
                            } else if (type === 'gallery') {
                                const galleries: any = [];
                                for (const listing of listings) {
                                    if (listing.gallery) {
                                        const { gallery } = listing;
                                        const existingGallery: any = galleries.filter(
                                            (x: any) => x.id === listing.gallery.id
                                        );
                                        if (existingGallery.length === 0) {
                                            const { art, price } = listing;
                                            delete art.artist;
                                            gallery.listings = [{ price, art }];
                                            galleries.push(gallery);
                                        } else {
                                            const { art, price } = listing;
                                            delete art.artist;
                                            existingGallery[0].listings.push({ price, art });
                                        }
                                    }
                                }
                                res.json({ art: [], galleries, artists: [], museums: [] });
                            } else if (type === 'artist') {
                                const artists: any = [];
                                for (const listing of listings) {
                                    if (listing?.art?.artist) {
                                        const {
                                            art: { artist },
                                        } = listing;
                                        const existingArtist: any = artists.filter(
                                            (x: any) => x.id === listing.art.artist.id
                                        );
                                        if (existingArtist.length === 0) {
                                            const { art, price } = listing;
                                            delete art.artist;
                                            artist.listings = [{ price, art }];
                                            artists.push(artist);
                                        } else {
                                            const { art, price } = listing;
                                            delete art.artist;
                                            existingArtist[0].listings.push({ price, art });
                                        }
                                    }
                                }
                                res.json({ art: [], galleries: [], artists, museums: [] });
                            } else {
                                let galleries: any = [];
                                const artists: any = [];
                                for (const listing of listings) {
                                    if (listing.gallery) {
                                        const gallery = galleries.filter((x: any) => x.id === listing.gallery.id);
                                        if (gallery.length === 0) {
                                            galleries.push(listing.gallery);
                                        }
                                    }

                                    if (listing.art && listing.art.artist) {
                                        const artist = artists.filter((x) => x.id === listing.art.artist.id);
                                        if (artist.length === 0) {
                                            artists.push(listing.art.artist);
                                        }
                                    }
                                }

                                const museums = galleries.filter((x): any => x.galleryTypeId === 3);
                                galleries = galleries.filter((x): any => x.galleryTypeId === 1);

                                res.json({ museums, galleries, artists, art: listings });
                            }
                        } else {
                            logger.error('Search failed');
                            res.status(401).json();
                        }
                    } catch (err) {
                        logger.error('Something went wrong', err);
                        res.status(500).json(err);
                    }
                } else {
                    res.status(401).json('Not logged in');
                }
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
