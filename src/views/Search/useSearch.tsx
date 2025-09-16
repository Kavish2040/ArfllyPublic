import { ANON_TOKEN, SEARCH } from '@/constants/apiRoutes';
import useRest from '@/lib/hooks/useRest';
import { useGlobalState } from '@/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useSearch = () => {
    const router = useRouter();
    const { setAnonUser, getUser, setSearchResults, setSearchText, getSearchValue } = useGlobalState();
    const { anonToken, authToken } = getUser();
    const { restGet, restPost } = useRest();

    const handleGetToken = async () => {
        // If they are using an anonymous token, refresh it
        if (!authToken) {
            const { status, data } = await restGet(ANON_TOKEN, true);
            if (status === 200 && data) {
                const anonTokenUpdate = {
                    anonToken: data.token,
                };
                setAnonUser(anonTokenUpdate);
            }
        }
    };

    useEffect(() => {
        handleGetToken();
        // eslint-disable-next-line
    }, []);

    const handleSearch = async (overridePath?: string) => {
        const searchValue = getSearchValue();
        const body = {
            anonToken,
            authToken,
            searchValue,
            type: '',
        };
        let pathname = '';
        pathname = router.pathname;
        if (typeof overridePath !== 'undefined' && overridePath !== '') {
            pathname = overridePath;
        }
        if (pathname === '/art') {
            body.type = 'art';
        }
        if (pathname === '/artists') {
            body.type = 'artist';
        }
        if (pathname === '/galleries') {
            body.type = 'gallery';
        }
        const { status, data } = await restPost(SEARCH, body, true);
        if (status === 200 && data) {
            setSearchResults(data);
            setSearchText(searchValue);
            if (pathname === '/') {
                router.push('/search');
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e?.keyCode === 13) {
            handleSearch();
        }
    };

    return {
        handleSearch,
        handleKeyDown,
    };
};

export default useSearch;
