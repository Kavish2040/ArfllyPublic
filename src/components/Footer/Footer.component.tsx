import {
    ActionIcon,
    Anchor,
    Container,
    createStyles,
    Grid,
    Group,
    rem,
    Stack,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import Image from 'next/image';
import { BrandFacebook, BrandInstagram, BrandTwitter, BrandYoutube, ArrowRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: '#111111',
        color: theme.colors.gray[6],
        padding: `calc(${theme.spacing.xl} * 3) 0`,
    },

    link: {
        color: theme.colors.gray[6],
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.white,
            textDecoration: 'underline',
        },
    },

    title: {
        color: theme.white,
        marginBottom: theme.spacing.sm,
        fontWeight: 600,
    },

    socialIcon: {
        color: theme.colors.gray[6],
        transition: 'color 0.2s ease',
        '&:hover': {
            color: theme.white,
        },
    },

    bottomSection: {
        borderTop: `${rem(1)} solid ${theme.colors.gray[8]}`,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
    },
}));

const FooterComponent = () => {
    const { classes } = useStyles();
    return (
        <footer className={classes.footer}>
            <Container size='xl'>
                <Grid>
                    <Grid.Col sm={12} md={3}>
                        <Stack>
                            <Image src='/logoWhite.svg' alt='Artflly Logo in white' width={180} height={60} />
                            <Text size="sm" mt="md" pr="xl">
                                Discover exceptional artworks from talented artists and galleries worldwide.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={4} md={2}>
                        <Stack spacing="sm">
                            <Text className={classes.title}>Explore</Text>
                            <Anchor href="/art" className={classes.link} size="sm">Art</Anchor>
                            <Anchor href="/artists" className={classes.link} size="sm">Artists</Anchor>
                            <Anchor href="/galleries" className={classes.link} size="sm">Galleries</Anchor>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={4} md={2}>
                        <Stack spacing="sm">
                            <Text className={classes.title}>Support</Text>
                            <Anchor href="/helpcenter" className={classes.link} size="sm">Contact Us</Anchor>
                            <Anchor href="/helpcenter" className={classes.link} size="sm">Help Center</Anchor>
                            <Anchor href="/helpcenter" className={classes.link} size="sm">FAQ's</Anchor>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={8} md={3}>
                        <Stack spacing="sm">
                             <Text className={classes.title}>Subscribe to our newsletter</Text>
                             <Text size="sm">Get the latest updates, articles, and resources, sent to your inbox.</Text>
                             <TextInput
                                placeholder="Enter your email"
                                rightSection={
                                    <ActionIcon variant="filled" color="gray" radius="xl">
                                        <ArrowRight size={16} />
                                    </ActionIcon>
                                }
                                styles={(theme) => ({
                                    input: {
                                        backgroundColor: 'transparent',
                                        borderColor: theme.colors.gray[7],
                                        color: theme.white,
                                        '&::placeholder': {
                                            color: theme.colors.gray[5],
                                        },
                                    },
                                })}
                             />
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={4} md={2}>
                        <Stack spacing="sm">
                            <Text className={classes.title}>Get the App</Text>
                            <Group>
                                <Image src='/iOSButton.svg' alt={'iOS Button'} width={120} height={40} />
                            </Group>
                            <Group>
                                <Image src='/playStoreButton.svg' alt={'Play Store Button'} width={120} height={40} />
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Group position="apart" className={classes.bottomSection}>
                    <Text size="sm">&copy; {new Date().getFullYear()} Artflly. All rights reserved.</Text>
                    <Group spacing="xs">
                        <ActionIcon size="lg" variant="transparent" className={classes.socialIcon}>
                            <BrandFacebook size={18} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="transparent" className={classes.socialIcon}>
                            <BrandInstagram size={18} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="transparent" className={classes.socialIcon}>
                            <BrandTwitter size={18} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="transparent" className={classes.socialIcon}>
                            <BrandYoutube size={18} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
};

export { FooterComponent };
