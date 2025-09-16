import { AnimatedHero, Text } from '@/components';
import { BackgroundImage, Button, Center, Container, Grid, Group, Space, Stack, Title } from '@mantine/core';
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
            <BackgroundImage src='./browseByPriceRangeBackground.png' mt={SECTION_SPACING}>
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
            </BackgroundImage>
            <Container size='xl'>
                <Grid my={SECTION_SPACING} columns={100} gutter='xl' align='center'>
                    <Grid.Col
                        span={40}
                        sx={{
                            background: 'linear-gradient(180deg, #0C0C0C 0%, #272626 100%)',
                            borderRadius: '8px',
                            color: 'white',
                            padding: '4rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Stack spacing='lg'>
                            <Title>Become a seller</Title>
                            <Text fz={18} fw={300}>
                                Join our community of talented artists and galleries today and start turning your
                                passion into profit!
                            </Text>
                            <Button
                                onClick={handleRouteToSeller}
                                variant='white'
                                rightIcon={<ArrowNarrowRight />}
                                radius='xl'
                                size='lg'
                                mt='md'
                                sx={{ alignSelf: 'flex-start' }}
                            >
                                Learn more
                            </Button>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={60}>
                        <Image src='/becomeASeller.png' alt='become a seller image' width={823} height={500} style={{ borderRadius: '8px' }}/>
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
};

export { Home };
