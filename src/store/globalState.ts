import { hookstate, useHookstate } from '@hookstate/core';
import cookies from 'js-cookie';
import { ANON_TOKEN_COOKIE, NOTIFICATION_TYPE, PRIVATE_TOKEN_COOKIE } from '../constants/applicationTypes';

const initialState = hookstate({
    anonymousUseCount: 0,
    isAnonymous: false,
    isLoggedIn: false,
    loading: false,
    notification: {
        notificationMessage: '',
        notificationTitle: '',
        notificationType: '',
    },
    searchText: '',
    searchValue: '',
    notificationVisible: false,
    user: {
        anonToken: '',
        authToken: '',
    },
    searchResults: {
        art: [],
        museums: [
            {
                id: '',
                name: '',
                logoImageUrl: '',
                bannerImageUrl: '',
                listings: [],
                token: '',
            },
        ],
        galleries: [
            {
                id: '',
                name: '',
                logoImageUrl: '',
                bannerImageUrl: '',
                listings: [],
                token: '',
            },
        ],
        artists: [
            {
                id: '',
                firstName: '',
                lastName: '',
                bioFullSizeImageUrl: '',
                logoImageUrl: '',
                listings: [],
                token: '',
            },
        ],
    },
});

export const useGlobalState = () => {
    const state = useHookstate(initialState);
    if (!state.isLoggedIn.get() && cookies.get(PRIVATE_TOKEN_COOKIE)) {
        state.isLoggedIn.set(true);
        state.user.set({ authToken: cookies.get(PRIVATE_TOKEN_COOKIE), anonToken: '' });
    }

    return {
        isNotificationVisible: () => state.notificationVisible.value,
        getNotification: () => state.notification.value,
        isAppLoading: () => state.loading.value,
        getUser: () => state.user.value,
        showLoading: () => {
            state.loading.set(true);
        },
        hideLoading: () => {
            state.loading.set(false);
        },
        showNotification: (errorMessage, title = 'There was an error', type = NOTIFICATION_TYPE.ERROR) => {
            state.notificationVisible.set(true);
            state.notification.set({
                notificationMessage: errorMessage,
                notificationTitle: title,
                notificationType: type,
            });
        },
        setSearchText: (data) => {
            state.searchText.set(data);
        },
        getSearchText: () => state.searchText.value,
        setSearchResults: (data) => {
            state.searchResults.set(data);
        },
        getSearchResults: () => state.searchResults.value,
        setSearchValue: (data) => {
            state.searchValue.set(data);
        },
        getSearchValue: () => state.searchValue.value,
        hideNotification: () => {
            state.notificationVisible.set(false);
        },
        setAnonUser: (data) => {
            cookies.set(ANON_TOKEN_COOKIE, data.anonToken);
            state.isAnonymous.set(true);
            state.user.set({ anonToken: data.anonToken, authToken: '' });
        },
        setAuthUser: (data) => {
            cookies.set(PRIVATE_TOKEN_COOKIE, data.token, { expires: 365, secure: true });
            state.isLoggedIn.set(true);
            state.user.set({ authToken: data.token, anonToken: '' });
        },
        logout: () => {
            state.isLoggedIn.set(false);
            state.isAnonymous.set(false);
            cookies.remove(ANON_TOKEN_COOKIE);
            cookies.remove(PRIVATE_TOKEN_COOKIE);
        },
        getAnonymousUsageCount: () => {
            return state.anonymousUseCount.get();
        },
        incrementAnonymousUsage: () => {
            const priorCount = state.anonymousUseCount.get();
            state.anonymousUseCount.set(priorCount + 1);
        },
        resetAnonymousUsage: () => {
            state.anonymousUseCount.set(0);
        },
        isLoggedIn: () => {
            return state.isLoggedIn.get();
        },
    };
};
