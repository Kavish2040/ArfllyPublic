import { LOGIN } from '@/constants/apiRoutes';
import { useGlobalState } from '@/store';
import { useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useRest from '../../lib/hooks/useRest';

const useHome = () => {
    const { setAnonUser } = useGlobalState();
    const theme = useMantineTheme();
    const { restPost } = useRest();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAnonLogin = async (values) => {
        const { status, data } = await restPost(LOGIN, values);
        if (status === 200 && data) {
            setAnonUser(data);
            handleRouteToArt();
        }
    };

    const handleRouteToArt = async () => {
        router.push('/art');
    };

    const handleRouteToForgotPassword = async () => {
        router.push('/forgotPassword');
    };

    const handleRouteToCreateAccount = async () => {
        router.push('/register');
    };

    const handleRouteToSeller = async () => {
        router.push('/becomeASeller');
    };

    return {
        theme,
        handleAnonLogin,
        handleSubmit,
        register,
        errors,
        handleRouteToCreateAccount,
        handleRouteToForgotPassword,
        handleRouteToArt,
        handleRouteToSeller,
    };
};

export default useHome;
