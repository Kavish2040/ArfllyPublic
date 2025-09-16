import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useAccount = () => {
    const router = useRouter();
    const [update, setUpdate] = useState(false);
    // eslint-disable-next-line max-len
    const [userPaymentMethodBoolPlaceholder, setUserPaymentMethodBoolPlaceholder] = useState(false); // to be removed to be replaced with user api call for if user has a payment method saved or not

    const accountCardRouting = (path) => {
        router.push(path);
    };

    const personalInfoSave = (section) => {
        setUpdate(false);
        notifications.show({
            message: `Your ${section} has been successfully updated`,
            styles: (theme) => ({
                root: {
                    width: '100vw',
                    position: 'fixed',
                    top: '79px',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    backgroundColor: theme.other.colors.main,
                    color: theme.other.colors.main,
                    height: '70px',
                    '&::before': { backgroundColor: theme.other.colors.main },
                },
                description: {
                    color: 'white',
                    width: '70vw',
                    textAlign: 'left',
                    marginLeft: 'auto',
                },
                closeButton: {
                    color: 'white',
                    marginRight: '10vw',
                },
            }),
            autoClose: 5000,
        });
    };

    const deleteCard = () => {
        setUpdate(false);
        notifications.show({
            message: `Your payment method has been successfully deleted`,
            styles: (theme) => ({
                root: {
                    width: '100vw',
                    position: 'fixed',
                    top: '79px',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    backgroundColor: theme.other.colors.main,
                    color: theme.other.colors.main,
                    height: '70px',
                    '&::before': { backgroundColor: theme.other.colors.main },
                },
                description: {
                    color: 'white',
                    width: '70vw',
                    textAlign: 'left',
                    marginLeft: 'auto',
                },
                closeButton: {
                    color: 'white',
                    marginRight: '10vw',
                },
            }),
            autoClose: 5000,
        });
    };

    return {
        accountCardRouting,
        personalInfoSave,
        update,
        setUpdate,
        userPaymentMethodBoolPlaceholder,
        setUserPaymentMethodBoolPlaceholder,
        deleteCard,
    };
};

export default useAccount;
