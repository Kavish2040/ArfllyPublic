import { AnimatedHero, Text } from '@/components';
import {
    BackgroundImage,
    Box,
    Button,
    Center,
    Container,
    createStyles,
    Grid,
    Group,
    Overlay,
    rem,
    Space,
    Stack,
    Title,
} from '@mantine/core';
import Image from 'next/image';
import { ArrowNarrowRight } from 'tabler-icons-react';
import { PriceRangeComponent } from './components';
import { BrowseByTypeComponent } from './components/BrowseByType';
import useHome from './useHome';

const SECTION_SPACING = 120;

const Home = () => {
    const { handleRouteToArt, handleRouteToSeller } = useHome();

    return (
        <Container fluid p={0}>
            <AnimatedHero onExploreClick={handleRouteToArt} />
            <Container size='xl' mt={SECTION_SPACING}>
                <BrowseByTypeComponent onExploreClick={handleRouteToArt} />
            </Container>
            <Box
                mt={SECTION_SPACING}
                sx={{
                    backgroundImage: 'url(./browseByPriceRangeBackground.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Container size='xl'>
                    <Grid pb={40} align='center'>
                        <Grid.Col xs={6}>
                            <Stack mt={100}>
                                <Title color='white'>Browse by Price Range</Title>
                                <Space h='xl' />
                                <Group className='clickable' grow>
                                    <PriceRangeComponent price='$1,000' text='Up to' />
                                </Group>
                                <Group className='clickable' grow>
                                    <PriceRangeComponent price='$5,000' text='From 1,000 up to' />
                                </Group>
                                <Group className='clickable' grow>
                                    <PriceRangeComponent price='$10,000' text='From 5,000 up to' />
                                </Group>
                                <Group className='clickable' grow>
                                    <PriceRangeComponent price='$10,000 +' text='From' />
                                </Group>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col xs={6}>
                            <Center>
                                <Image
                                    src='/bedWithTwoPaintings.png'
                                    alt='bed with two paintings'
                                    width={515}
                                    height={732}
                                />
                            </Center>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
            <Box my={rem(128)}>
                <Container size="xl">
                    <BackgroundImage
                        src="/becomeASeller.png"
                        radius={0}
                        sx={{
                            height: rem(500),
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Overlay color="#000" opacity={0.5} zIndex={1} />
                        <Stack
                            sx={(theme) => ({
                                position: 'relative',
                                zIndex: 2,
                                color: 'white',
                                maxWidth: rem(600),
                                padding: theme.spacing.xl,
                                alignItems: 'center',
                            })}
                            spacing="lg"
                        >
                            <Title
                                order={1}
                                sx={(theme) => ({
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: rem(64),
                                    fontWeight: 700,
                                    color: theme.white,
                                })}
                            >
                                Become a seller
                            </Title>
                            <Text
                                size="lg"
                                sx={(theme) => ({
                                    fontFamily: 'Roboto, sans-serif',
                                    fontWeight: 300,
                                    color: theme.colors.gray[3],
                                    lineHeight: 1.6,
                                })}
                            >
                                Join our community of talented artists and galleries today and start turning your
                                passion into profit! We provide the tools and exposure you need to connect with a
                                global audience of art lovers.
                            </Text>
                            <Button
                                onClick={handleRouteToSeller}
                                size="lg"
                                radius="xl"
                                variant="outline"
                                rightIcon={<ArrowNarrowRight />}
                                sx={(theme) => ({
                                    marginTop: '1.5rem',
                                    color: theme.white,
                                    borderColor: theme.white,
                                    '&:hover': {
                                        backgroundColor: theme.white,
                                        color: theme.black,
                                    },
                                })}
                            >
                                Learn more
                            </Button>
                        </Stack>
                    </BackgroundImage>
                </Container>
            </Box>
        </Container>
    );
};

export { Home };
