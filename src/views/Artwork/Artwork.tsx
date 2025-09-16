import { ArtCarousel, Text } from '@/components';
import { ARTFLLY_ART, ARTFLLY_ARTIST } from '@/constants/apiRoutes';
import { CATEGORIES } from '@/constants/applicationTypes';
import useRest from '@/lib/hooks/useRest';
import { Button, Container, Divider, Grid, Group, Image, SegmentedControl, Stack, Title } from '@mantine/core';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ChevronRight, Heart, Plus } from 'tabler-icons-react';

const ArtworkWithoutSSR = () => {
    const [medium, setMedium] = useState('');
    const [dimensions, setDimensions] = useState('in');
    const [weightDimensions, setWeightDimensions] = useState('in');
    const { restGet } = useRest();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [art, setArt] = useState<any>(null);
    const [price, setPrice] = useState<number>(0);
    const [listings, setListings] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = '';
                const path = window.location.pathname;
                token = path.replace('/artwork/', '');
                const { data } = await restGet(`${ARTFLLY_ART}/${token}`);
                setArt(data.art);
                setPrice(data.price);
                const artistToken = data.art.artist.token;
                if (artistToken) {
                    const { data } = await restGet(`${ARTFLLY_ARTIST}/${artistToken}`);
                    setListings(data.listings);
                }
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.pathname]);

    const handleRouteToArtist = () => {
        router.push(`/artist/${art.artist.id}`);
    };

    useEffect(() => {
        // set Medium
        if (art === null) {
            return;
        }
        const mediumFields = CATEGORIES.filter((x) => x.name === 'MEDIUM')[0].fields;
        const matchingFields = mediumFields.filter((field) => (field.bitValue & art.mediumBitMap) !== 0);

        let tempMedium = '';
        for (const medium of matchingFields) {
            tempMedium += ` ${medium.name}`;
        }
        setMedium(tempMedium);
        // eslint-disable-next-line
    }, [art]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An error occurred loading the artwork: {error}</div>;
    }

    return (
        <Container fluid p={0}>
            <Container fluid bg='black'>
                <Container size='lg' py={50}>
                    <ImageGallery
                        items={[
                            {
                                original: art.fullSizeImageUrl,
                                thumbnail: art.thumbnailImageUrl,
                            },
                        ]}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </Container>
            </Container>
            <Container size='xl'>
                <Grid mt={100}>
                    <Grid.Col sm={7}>
                        <Title order={3}>About the artwork</Title>
                        <Text fz={18} fw={300}>
                            {art.description || 'No Description Provided'}
                        </Text>
                        <Title order={3} mt={100}>
                            Specifications
                        </Title>
                        <Grid mt={60}>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={500} noMargin>
                                    Medium
                                </Text>
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={300} noMargin>
                                    {medium}
                                </Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my={24} />
                        <Grid>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={500} noMargin>
                                    Dimension
                                </Text>
                                <SegmentedControl
                                    value={dimensions}
                                    onChange={(value) => setDimensions(value)}
                                    data={[
                                        { label: 'in', value: 'in' },
                                        { label: 'cm', value: 'cm' },
                                    ]}
                                    radius='xl'
                                    size='sm'
                                    mt={35}
                                />
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={300} noMargin>
                                    {dimensions === 'cm' ? art.metricWidth * 100 : art.width} x{' '}
                                    {dimensions === 'cm' ? art.metricHeight * 100 : art.height} (with frame)
                                </Text>
                                <Text fz={18} fw={300} noMargin>
                                    {dimensions === 'cm' ? art.metricWidth * 100 : art.width} x{' '}
                                    {dimensions === 'cm' ? art.metricHeight * 100 : art.height} (without frame)
                                </Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my={24} />
                        <Grid>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={500} noMargin>
                                    Weight
                                </Text>
                                <SegmentedControl
                                    value={weightDimensions}
                                    onChange={(value) => setWeightDimensions(value)}
                                    data={[
                                        { label: 'lbs', value: 'lbs' },
                                        { label: 'kg', value: 'kg' },
                                    ]}
                                    radius='xl'
                                    size='sm'
                                    mt={35}
                                />
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={300} noMargin>
                                    {weightDimensions === 'lbs' ? art.weight : (art.weight / 2.205).toFixed(2)}
                                </Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my={24} />
                    </Grid.Col>
                    <Grid.Col sm={1} />
                    <Grid.Col sm={4}>
                        <Group position='apart'>
                            <Text fz={24} fw={400}>
                                {art.name}
                            </Text>
                            <Heart />
                        </Group>
                        <Text fz={24} fw={400}>
                            ${price}
                        </Text>
                        <Text fz={16} fw={300}>
                            {dimensions === 'cm' ? art.metricWidth * 100 : art.width} x{' '}
                            {dimensions === 'cm' ? art.metricHeight * 100 : art.height} {dimensions}
                        </Text>
                        <Text fz={16} fw={400}>
                            {art.artist.firstName} {art.artist.lastName}
                        </Text>
                        <Button variant='filled' size='lg' radius='lg' fullWidth>
                            Purchase
                        </Button>
                        <Divider mt={20} />
                        <Button
                            rightIcon={<Plus />}
                            fullWidth
                            variant='subtle'
                            styles={{ label: { marginRight: 'auto' } }}
                            mt={20}
                        >
                            Shipping
                        </Button>
                        <Divider mt={20} />
                        <Button
                            rightIcon={<Plus />}
                            fullWidth
                            variant='subtle'
                            styles={{ label: { marginRight: 'auto' } }}
                            mt={20}
                        >
                            Warranty
                        </Button>
                        <Divider mt={20} />
                        <Button
                            rightIcon={<Plus />}
                            fullWidth
                            variant='subtle'
                            styles={{ label: { marginRight: 'auto' } }}
                            mt={20}
                        >
                            Payment
                        </Button>
                        <Divider mt={20} />
                    </Grid.Col>
                </Grid>
                <Container p={0} size='xl' mt={100}>
                    <Title order={3}>About the artist</Title>
                    <Grid mt={60}>
                        <Grid.Col sm={6}>
                            <Image
                                src={art.artist.bioFullSizeImageUrl}
                                withPlaceholder
                                width={648}
                                height={522}
                                alt='About the artist featured art'
                            />
                        </Grid.Col>
                        <Grid.Col sm={1} />
                        <Grid.Col sm={5}>
                            <Group>
                                <Image
                                    src={art.artist.logoImageUrl}
                                    width={72}
                                    withPlaceholder
                                    height={72}
                                    alt='Artist profile picture'
                                />
                                <Stack spacing='xs'>
                                    <Text fw={400} noMargin>
                                        {art.artist.firstName} {art.artist.lastName}
                                    </Text>
                                </Stack>
                            </Group>
                            <Text fw={300} noMargin pt={32}>
                                {art.artist.bio || 'No Biography Provided'}
                            </Text>
                            <Button variant='link' px={0} mt={45} onClick={handleRouteToArtist}>
                                View profile <ChevronRight />
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Container>
                <Container size='md' p={0} fluid>
                    <ArtCarousel
                        title={`Other artworks from ${art.artist.firstName} ${art.artist.lastName}`}
                        viewButton={false}
                        art={listings}
                    />
                </Container>
            </Container>
        </Container>
    );
};

/*
                                <Text fz={18} fw={300} noMargin>
                                    {weightDimensions === 'lbs' ? weight : weight / 2.205} (without frame)
                                </Text>


                        <Grid>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={500} noMargin>
                                    Ships with frame
                                </Text>
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={300} noMargin>
                                    {shipsPlaceholder}
                                </Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my={24} />
                        <Grid>
                            <Grid.Col sm={6}>
                                <Text fz={18} fw={500} noMargin>
                                    Tags
                                </Text>
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <PillComponent title='Tags placeholder' />
                            </Grid.Col>
                        </Grid>
                        <Divider mt={24} />

                        
                <Container size='xl' p={0} my={200}>
                    <ArtCarousel title='You might like' viewButton={false} art={[]} />
                </Container>
*/

const Artwork = dynamic(() => Promise.resolve(ArtworkWithoutSSR), {
    ssr: false,
});

export { Artwork };
