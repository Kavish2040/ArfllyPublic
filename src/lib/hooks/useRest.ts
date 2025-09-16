import axios from 'axios';
import { useGlobalState } from '../../store';

const useRest = () => {
    const { showLoading, hideLoading, showNotification, hideNotification, getUser, incrementAnonymousUsage } =
        useGlobalState();

    const makeCall = async (type: string, path: string, body: object, loading: boolean) => {
        let callResults;
        hideNotification();
        const anonBearer = getUser()?.anonToken ? `Bearer ${getUser().anonToken}` : '';
        const Authorization = getUser()?.authToken ? `Bearer ${getUser().authToken}` : anonBearer;
        if (Authorization === anonBearer) {
            incrementAnonymousUsage();
        }
        const params = {
            noCache: true,
            headers: {
                Authorization,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
            },
        };

        try {
            if (loading) {
                showLoading();
            }

            switch (type) {
                case 'GET':
                    callResults = await axios.get(path, params);
                    break;
                case 'POST':
                    callResults = await axios.post(path, body, params);
                    break;
                case 'PUT':
                    callResults = await axios.put(path, body, params);
                    break;
                case 'DELETE':
                    callResults = await axios.delete(path, params);
                    break;
            }

            if (loading) {
                hideLoading();
            }

            return callResults;
        } catch (e) {
            if (loading) {
                hideLoading();
            }
            showNotification('Error making call.');
            return e;
        }
    };

    const restGet = (path: string, loading = true) => {
        return makeCall('GET', path, {}, loading);
    };

    const restPut = async (path: string, body: object, loading = true) => {
        return makeCall('PUT', path, body, loading);
    };

    const restPost = (path: string, body: object, loading = true) => {
        return makeCall('POST', path, body, loading);
    };

    const restDelete = (path: string, loading = true) => {
        return makeCall('DELETE', path, {}, loading);
    };

    return {
        restGet,
        restPut,
        restPost,
        restDelete,
    };
};

export default useRest;
