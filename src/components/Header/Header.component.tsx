import { Text } from '@/components';
import { LogInModal } from '@/components/Header/LoginModal';
import { useGlobalState } from '@/store';
import useSearch from '@/views/Search/useSearch';
import {
    Burger,
    Button,
    Container,
    Drawer,
    Grid,
    Group,
    Header,
    Popover,
    Space,
    Stack,
    Tabs,
    TextInput,
    useMantineTheme,
    Flex,
} from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    Heart,
    Help,
    Logout,
    Messages,
    Search,
    User,
} from 'tabler-icons-react';
import {
    CompleteYourAccountModal,
    SignUpModal,
    WelcomeToArtfllyModal,
} from './SignUpModals';
import useHeaderComponent from './useHeader.component';

const HeaderComponent = () => {
    const {
        items,
        router,
        handleTabChange,
        opened,
        toggle,
        welcomeToArtfllyModal,
        welcomeToArtfllyModalHandlers,
        logInModalHandlers,
        logInModal,
        completeYourAccountModal,
        completeYourAccountModalHandlers,
        signUpModalHandlers,
        signUpModal,
        popoverVisible,
        setPopoverVisible,
        handleLogoClick,
        firstName,
        setFirstName,
        firstLetter,
    } = useHeaderComponent();
    const theme = useMantineTheme();
    const { getSearchValue, setSearchValue, getAnonymousUsageCount, resetAnonymousUsage, isLoggedIn, logout } =
        useGlobalState();
    const { handleSearch, handleKeyDown } = useSearch();
    const searchValue = getSearchValue();
    const anonCount = getAnonymousUsageCount();
    const loggedIn = isLoggedIn();
    const [showNav, setShowNav] = useState(router.pathname !== '/');

    useEffect(() => {
        if (router.pathname === '/') {
            const handleScroll = () => {
                if (window.scrollY > window.innerHeight / 2) {
                    setShowNav(true);
                } else {
                    setShowNav(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setShowNav(true);
        }
    }, [router.pathname]);

    const performBlankSearch = (newPath: string) => {
        if (anonCount >= 12) {
            logInModalHandlers.setTrue();
            resetAnonymousUsage();
        }
        setSearchValue('');
        handleSearch(newPath);
    };

    return (
        <Header
            height={80}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderBottom: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                zIndex: 1000,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                opacity: showNav ? 1 : 0,
                visibility: showNav ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Container fluid px='4%'>
                <Flex align='center' justify='space-between' h={80}>
                    <Group spacing='xl'>
                        <Image
                            src='/logo-small.svg'
                            alt='Logo'
                            width={100}
                            height={50}
                            onClick={handleLogoClick}
                            style={{ cursor: 'pointer' }}
                        />
                        <Tabs
                            radius={0}
                            value={router.pathname === '/' ? null : (router.query.activeTab as string)}
                            onTabChange={(value: any) => {
                                if (value === '/art' || value === '/artists' || value === '/galleries') {
                                    performBlankSearch(value);
                                    handleTabChange(value);
                                } else {
                                    handleTabChange(value);
                                }
                            }}
                            sx={{
                                '@media(max-width: 1086px)': {
                                    display: 'none',
                                },
                                '.mantine-Tabs-tabLabel': {
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                },
                            }}
                        >
                            <Tabs.List>{items}</Tabs.List>
                        </Tabs>
                    </Group>

                    <Group spacing='md'>
                        <TextInput
                            radius='xl'
                            size='md'
                            w={300}
                            styles={{
                                input: {
                                    borderColor: '#ced4da',
                                    transition: 'all 0.2s ease',
                                    '&:focus-within': {
                                        borderColor: theme.primaryColor,
                                        boxShadow: `0 0 0 1px ${theme.colors[theme.primaryColor][6]}`,
                                    },
                                },
                            }}
                            onKeyDown={(e) => handleKeyDown(e)}
                            onChange={(event) => setSearchValue(event.currentTarget.value)}
                                    value={searchValue}
                            placeholder='Search artists, artwork, galleries'
                            rightSection={
                                <Search
                                    style={{ cursor: 'pointer' }}
                                    color={theme.colors.gray[6]}
                                    height={20}
                                    width={20}
                                    onClick={() => handleSearch()}
                                />
                            }
                        />

                            {loggedIn ? (
                            <Popover width={280} position='bottom-end' offset={15} opened={popoverVisible}>
                                <Popover.Target>
                                            <Button
                                        variant='outline'
                                        size='md'
                                        radius='xl'
                                        sx={{
                                            borderColor: '#ced4da',
                                            color: theme.other.colors.offBlack,
                                            '&:hover': {
                                                backgroundColor: theme.colors.gray[0],
                                            },
                                        }}
                                        onClick={() => setPopoverVisible.toggle()}
                                    >
                                        <Group spacing='xs'>
                                            <Image src='/profileDefaultIcon.svg' alt='profile icon' width={20} height={20} />
                                            <Image src='/Burger.png' alt='burger' width={14} height={11} />
                                        </Group>
                                    </Button>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    {/* Popover content remains the same */}
                                    <Stack>
                                        <Group
                                            onClick={() => {
                                                // Navigate to inquiries - you may need to implement this route
                                                // TODO: Implement inquiries navigation
                                                setPopoverVisible.setFalse();
                                            }}
                                            className='clickable'
                                            sx={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                },
                                            }}
                                        >
                                            <Messages color={theme.other.colors.offBlack} />
                                            <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                Inquiries
                                            </Text>
                                        </Group>
                                        <Group
                                            onClick={() => {
                                                // Navigate to liked artworks - you may need to implement this route
                                                // TODO: Implement liked artworks navigation
                                                setPopoverVisible.setFalse();
                                            }}
                                            className='clickable'
                                            sx={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                },
                                            }}
                                        >
                                            <Heart color={theme.other.colors.offBlack} />
                                            <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                Liked artworks
                                            </Text>
                                        </Group>
                                        <Group
                                            onClick={() => {
                                                router.push('/account');
                                                setPopoverVisible.setFalse();
                                            }}
                                            className='clickable'
                                            sx={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                },
                                            }}
                                        >
                                            <User color={theme.other.colors.offBlack} />
                                            <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                Account
                                            </Text>
                                        </Group>
                                        <Group
                                            onClick={() => {
                                                router.push('/helpcenter');
                                                setPopoverVisible.setFalse();
                                            }}
                                            className='clickable'
                                            sx={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                },
                                            }}
                                        >
                                            <Help color={theme.other.colors.offBlack} />
                                            <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                Help
                                            </Text>
                                        </Group>
                                        <Group
                                                    onClick={() => {
                                                        logout();
                                                setPopoverVisible.setFalse();
                                                        router.push('/');
                                                    }}
                                            className='clickable'
                                            sx={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                },
                                            }}
                                        >
                                            <Logout color={theme.other.colors.offBlack} />
                                            <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                        Logout
                                            </Text>
                                        </Group>
                                    </Stack>
                                </Popover.Dropdown>
                            </Popover>
                        ) : (
                            <Group>
                                <Button variant='default' onClick={() => logInModalHandlers.setTrue()}>
                                        Log In
                                    </Button>
                                <Button onClick={() => signUpModalHandlers.setTrue()}>Sign Up</Button>
                            </Group>
                        )}
                    </Group>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        sx={{
                            '@media(min-width: 1086px)': {
                                display: 'none',
                            },
                        }}
                    />
                    <Drawer
                        opened={opened}
                        onClose={toggle}
                        position='right'
                        size='66%'
                        withCloseButton={false}
                        sx={{
                            '@media(min-width: 1086px)': {
                                display: 'none',
                            },
                        }}
                    >
                        <Tabs
                            defaultValue='art'
                            radius={0}
                            pt={108}
                            value={router.pathname}
                            onTabChange={(value: any) => handleTabChange(value)}
                            orientation='vertical'
                            variant='pills'
                        >
                            <Tabs.List w='100%'>{items}</Tabs.List>
                        </Tabs>
                    </Drawer>
                </Flex>
                <SignUpModal
                    opened={signUpModal}
                    close={() => signUpModalHandlers.setFalse()}
                    openModal={() => signUpModalHandlers.setTrue()}
                    openLogin={() => logInModalHandlers.setTrue()}
                />
                <CompleteYourAccountModal
                    opened={completeYourAccountModal}
                    close={() => completeYourAccountModalHandlers.setFalse()}
                    openModal={() => completeYourAccountModalHandlers.setTrue()}
                    setFirstName={setFirstName}
                    firstName={firstName}
                />
                <WelcomeToArtfllyModal
                    opened={welcomeToArtfllyModal}
                    close={() => welcomeToArtfllyModalHandlers.setFalse()}
                    openModal={() => welcomeToArtfllyModalHandlers.setTrue()}
                    firstLetter={firstLetter}
                    firstName={firstName}
                />
                <LogInModal
                    opened={logInModal}
                    close={() => logInModalHandlers.setFalse()}
                    closeModal={() => logInModalHandlers.setFalse()}
                    showSignUp={() => signUpModalHandlers.setTrue()}
                />
            </Container>
        </Header>
    );
};

export { HeaderComponent };
