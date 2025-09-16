import { Alert, AppShell, LoadingOverlay, useMantineTheme } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { NOTIFICATION_TYPE } from '../../constants/applicationTypes';
import { useGlobalState } from '../../store';
import { FooterComponent } from '../Footer';
import { HeaderComponent } from '../Header';

const CoreLayout = ({ children }: PropsWithChildren) => {
    const { isAppLoading, getNotification, hideNotification, isNotificationVisible } = useGlobalState();
    const theme = useMantineTheme();
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isBecomeASellerPage = router.pathname === '/becomeASeller';

    const getPaddingTop = () => {
        if (isHomePage) {
            return 0;
        }
        if (isBecomeASellerPage) {
            return 80;
        }
        return 100;
    }

    return (
        <>
            <AppShell padding={0} fixed={false} header={<HeaderComponent />} footer={<FooterComponent />}>
                <div style={{ paddingTop: getPaddingTop() }}>
                    {isNotificationVisible() ? (
                        <Alert
                            icon={<IconAlertCircle size='1rem' />}
                            title={getNotification().notificationTitle}
                            color={getNotification().notificationType === NOTIFICATION_TYPE.ERROR ? 'red' : 'green'}
                            withCloseButton
                            closeButtonLabel='Close Notification'
                            onClose={hideNotification}
                        >
                            {getNotification().notificationMessage}
                        </Alert>
                    ) : (
                        <></>
                    )}
                    <LoadingOverlay
                        sx={{
                            position: 'fixed',
                        }}
                        loaderProps={{
                            size: 'xl',
                            color: theme.other.colors.main,
                        }}
                        overlayColor={theme.other.colors.bg}
                        visible={isAppLoading()}
                    />
                    {children}
                </div>
            </AppShell>
        </>
    );
};

export { CoreLayout };
