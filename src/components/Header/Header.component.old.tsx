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
    Box,
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
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            height={90}
            sx={(theme) => ({
                backgroundColor: 'white',
                borderBottom: '1px solid #f0f0f0',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                zIndex: 1000,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                opacity: showNav ? 1 : 0,
                visibility: showNav ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
            })}
        >
            <Container fluid px='4%'>
                <Grid columns={100}>
                    <Grid.Col span={12} pt={25}>
                        <Image
                            src='/logo-small.svg'
                            alt='Logo'
                            width={110}
                            height={55}
                            onClick={handleLogoClick}
                            className='clickable'
                            style={{ cursor: 'pointer' }}
                        />
                    </Grid.Col>
                    <Grid.Col span={38}>
                        <Tabs
                            radius={0}
                            pt={24}
                            value={router.query.activeTab as string}
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
                                    fontSize: '16px',
                                    fontWeight: 500,
                                },
                            }}
                        >
                            <Tabs.List position='left'>{items}</Tabs.List>
                        </Tabs>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            sx={{
                                '@media(min-width: 1086px)': {
                                    display: 'none',
                                },
                                float: 'right',
                            }}
                            pt={29}
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
                    </Grid.Col>
                    <Grid.Col span={50}>
                        <Grid mt={12}>
                            <Grid.Col span={9} offset={1}>
                                <TextInput
                                    radius='xl'
                                    size='lg'
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid #e0e0e0',
                                            paddingLeft: '18px',
                                            borderRadius: '32px',
                                            backgroundColor: '#fafafa',
                                            height: '48px',
                                            fontSize: '16px',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                                            transition: 'all 0.2s ease',
                                            '&:focus': {
                                                borderColor: '#000',
                                                backgroundColor: 'white',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                            },
                                        },
                                        placeholder: {
                                            fontSize: '16px',
                                            color: theme.other?.colors?.secondaryText || '#888',
                                            fontWeight: 400,
                                        },
                                        rightSection: {
                                            backgroundColor: '#000',
                                            borderTopRightRadius: '32px',
                                            borderBottomRightRadius: '32px',
                                            width: '72px',
                                            height: '49px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                backgroundColor: '#333',
                                            },
                                        },
                                    })}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    onChange={(event) => setSearchValue(event.currentTarget.value)}
                                    value={searchValue}
                                    placeholder='Search'
                                    rightSection={
                                        <Search
                                            className='clickable'
                                            color='white'
                                            height={20}
                                            width={20}
                                            onClick={() => handleSearch()}
                                        />
                                    }
                                />
                            </Grid.Col>
                            {loggedIn && (
                                <Grid.Col span={2}>
                                    <Popover width={280} position='bottom-end' offset={15} opened={popoverVisible}>
                                        <Popover.Target>
                                            <Button
                                                size='md'
                                                px={0}
                                                mt={0}
                                                sx={{
                                                    width: '80px',
                                                    height: '48px',
                                                    background: 'white',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '24px',
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                                                    transition: 'all 0.2s ease',
                                                    marginLeft: '16px',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                        borderColor: '#ccc',
                                                    },
                                                }}
                                                onClick={() => setPopoverVisible.toggle()}
                                            >
                                                <Image
                                                    src='/profileDefaultIcon.svg'
                                                    alt='profile icon'
                                                    width={23}
                                                    height={23}
                                                />
                                                <Space w='xs' />
                                                <Image src='/Burger.png' alt='burger' width={15} height={12} />
                                            </Button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
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
                                </Grid.Col>
                            )}
                            {!loggedIn && (
                                <Grid.Col span={2}>
                                    <Popover
                                        width={280}
                                        position='bottom-end'
                                        offset={15}
                                        opened={popoverVisible}
                                        onChange={() => setPopoverVisible.toggle()}
                                    >
                                        <Popover.Target>
                                            <Button
                                                size='md'
                                                px={0}
                                                mt={0}
                                                sx={{
                                                    width: '80px',
                                                    height: '48px',
                                                    background: 'white',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '24px',
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                                                    transition: 'all 0.2s ease',
                                                    marginLeft: '16px',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                        borderColor: '#ccc',
                                                    },
                                                }}
                                                onClick={() => setPopoverVisible.toggle()}
                                            >
                                                <Image
                                                    src='/profileDefaultIcon.svg'
                                                    alt='profile icon'
                                                    width={23}
                                                    height={23}
                                                />
                                                <Space w='xs' />
                                                <Image src='/Burger.png' alt='burger' width={15} height={12} />
                                            </Button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Stack>
                                                <Group
                                                    onClick={() => {
                                                        logInModalHandlers.setTrue();
                                                        setPopoverVisible.setFalse();
                                                    }}
                                                    className='clickable'
                                                >
                                                    <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                        Login
                                                    </Text>
                                                </Group>
                                                <Group
                                                    onClick={() => {
                                                        signUpModalHandlers.setTrue();
                                                        setPopoverVisible.setFalse();
                                                    }}
                                                    className='clickable'
                                                >
                                                    <Text fz={14} fw={300} color={theme.other.colors.offBlack} noMargin>
                                                        Sign up for a free account
                                                    </Text>
                                                </Group>
                                            </Stack>
                                        </Popover.Dropdown>
                                    </Popover>
                                </Grid.Col>
                            )}
                        </Grid>
                    </Grid.Col>
                </Grid>
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
