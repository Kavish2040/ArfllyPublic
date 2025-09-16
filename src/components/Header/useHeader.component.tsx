import { useBoolean } from '@/lib/hooks/useBoolean';
import { useGlobalState } from '@/store';
import { Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useHeaderComponent = () => {
    const router = useRouter();
    const { logout } = useGlobalState();
    const hideHeaderRoutes = ['/', '/register', '/forgotPassword', '/registerGallery', '/registerArtist'];
    const [opened, { toggle }] = useDisclosure(false);
    const [welcomeToArtfllyModal, welcomeToArtfllyModalHandlers] = useBoolean(false);
    const [completeYourAccountModal, completeYourAccountModalHandlers] = useBoolean(false);
    const [logInModal, logInModalHandlers] = useBoolean(false);
    const [signUpModal, signUpModalHandlers] = useBoolean(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [popoverVisible, setPopoverVisible] = useBoolean(false);
    const [firstName, setFirstName] = useState('');

    const navigation = [
        { label: 'Art', value: '/art' },
        { label: 'Artists', value: '/artists' },
        { label: 'Galleries', value: '/galleries' },
        // { label: 'Discover', value: '/discover' },
        { label: 'Sell', value: '/becomeASeller' },
    ];

    const validatePassword = (password) => {
        const hasNumber = /[0-9]/.test(password);
        const hasMinLength = password.length >= 8;
        const hasSpecialCharacter = /[!@#$%^&*()={},.]/.test(password);
        return hasNumber && hasMinLength && hasSpecialCharacter;
    };

    const handleTabChange = (value) => {
        if (value === '/') {
            logout();
        }
        router.push(`${value}`);
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    const items = navigation.map((item) => (
        <Tabs.Tab key={item.label} value={item.value}>
            {item.label}
        </Tabs.Tab>
    ));

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (!validatePassword(event.target.value)) {
            setError('Password does not meet the requirements');
            return false;
        }
        setError('');
        return true;
    };

    const handleConfirmChange = (event) => {
        const newValue = event.target.value;
        setConfirmPassword(newValue);
        if (password !== newValue) {
            setConfirmError('Passwords do not match');
            return false;
        }
        setConfirmError('');
        return true;
    };

    const firstLetter = firstName ? firstName[0] : '';

    return {
        welcomeToArtfllyModal,
        welcomeToArtfllyModalHandlers,
        logInModalHandlers,
        logInModal,
        completeYourAccountModal,
        completeYourAccountModalHandlers,
        signUpModalHandlers,
        signUpModal,
        confirmError,
        confirmPassword,
        error,
        firstLetter,
        firstName,
        handleConfirmChange,
        handleLogoClick,
        handlePasswordChange,
        handleTabChange,
        hideHeaderRoutes,
        items,
        opened,
        password,
        popoverVisible,
        router,
        setFirstName,
        setPopoverVisible,
        toggle,
    };
};

export default useHeaderComponent;
