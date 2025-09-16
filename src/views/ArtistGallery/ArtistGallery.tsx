import { ArtCardComponent, SearchBar, SortHeader, Text } from '@/components';
import useSearchBar from '@/components/SearchBar/useSearchBar';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import { ARTFLLY_ARTIST, ARTFLLY_FOLLOW, ARTFLLY_GALLERY } from '@/constants/apiRoutes';
// import { InstagramArtCard } from '@/views/ArtistGallery/components';
import useRest from '@/lib/hooks/useRest';
import { useGlobalState } from '@/store';
import { BackgroundImage, Button, Container, Flex, Grid, Group, Image, Stack, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconPlus, IconUsers } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/*
const instagramArtworkItems = [
    { name: 'artist name placeholder1', handle: '@placeholder handle', art: '/instagramPlaceholderArt.png' },
    { name: 'artist name placeholder2', handle: '@placeholder handle', art: '/instagramPlaceholderArt.png' },
    { name: 'artist name placeholder3', handle: '@placeholder handle', art: '/instagramPlaceholderArt.png' },
    { name: 'artist name placeholder', handle: '@placeholder handle', art: '/instagramPlaceholderArt.png' },
];
*/
/*
type ArtistGalleryProps = {
    item: any;
    listings: any;
    type: string;
    debug: any;
};
*/
const ArtistGalleryWithoutSSR = () => {
    const { opened, toggle } = useSearchBar();
    const { filterClick, filterPills } = useSortHeader();
    const { isLoggedIn } = useGlobalState();
    const { restGet } = useRest();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isGallery, setIsGallery] = useState<boolean>(false);
    const [item, setItem] = useState<any>(null);
    const [listings, setListings] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiPath = '';
                let token = '';
                let isArtist = true;
                const path = window.location.pathname;
                if (path.substring(0, 7) === '/artist') {
                    token = path.replace('/artist/', '');
                    apiPath = ARTFLLY_ARTIST;
                    isArtist = true;
                } else {
                    token = path.replace('/gallery/', '');
                    apiPath = ARTFLLY_GALLERY;
                    isArtist = false;
                }
                setIsGallery(!isArtist);
                const { data } = await restGet(`${apiPath}/${token}`);
                if (isArtist) {
                    setItem(data.artist);
                } else {
                    setItem(data.gallery);
                }
                setListings(data.listings);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFollow = async () => {
        if (item.buyerIsFollowing) {
            return;
        }
        if (isLoggedIn()) {
            // call API to follow /artistId/galleryId
            const urlSuffix = `/${isGallery ? '0' : item.id}/${isGallery ? item.id : '0'}`;
            const { status, data } = await restGet(`${ARTFLLY_FOLLOW}${urlSuffix}`);
            if (status === 200 && data) {
                notifications.show({
                    title: 'Success',
                    color: 'green',
                    withBorder: true,
                    message: isGallery
                        ? `You are now following ${item.name}.`
                        : `You are now following ${item.firstName} ${item.lastName}.`,
                });
            }
            // Change the state of the button? will req api update to carry "is followed"
            item.buyerIsFollowing = 1;
        } else {
            // show login modal
            // TBD what we can do if/when they do??
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred loading the profile data: {error}</div>;
    }

    return (
        <>
            <BackgroundImage
                src={isGallery ? item.bannerImageUrl : item.bioFullSizeImageUrl}
                sx={{ backgroundColor: '#FAFAFA' }}
            >
                <Container fluid p={0} h={500} />
            </BackgroundImage>
            <Container fluid p={130}>
                <Grid>
                    <Grid.Col sm={1}>
                        <Image src={item.logoImageUrl} alt='Profile Picture' withPlaceholder width={130} height={130} />
                    </Grid.Col>
                    <Grid.Col sm={1} />
                    <Grid.Col sm={6}>
                        <Stack>
                            <Title order={3}>{isGallery ? item.name : `${item.firstName} ${item.lastName}`}</Title>
                            <Text noMargin fz={18} fw={400}>
                                {isGallery
                                    ? item.description || 'No Description Provided'
                                    : item.bio || 'No Biography Provided'}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={4} pl={24}>
                        <Button
                            fullWidth
                            variant='outline'
                            size='lg'
                            radius='xl'
                            rightIcon={item.buyerIsFollowing === 1 ? '' : <IconPlus size={24} />}
                            onClick={() => handleFollow()}
                            disabled={item.buyerIsFollowing === 1}
                        >
                            {item.buyerIsFollowing === 1 ? 'Following' : isLoggedIn() ? 'Follow' : 'Sign in to Follow'}
                        </Button>
                        <Group position='center'>
                            <IconUsers size={24} />
                            <Text noMargin py={24}>
                                {item.followedCount} Follower{item.followedCount === 1 ? '' : 's'}
                            </Text>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container fluid px='4%'>
                <Flex direction='row' sx={{ backgroundColor: '#FAFAFA' }} pb={100}>
                    <SearchBar opened={opened} toggle={toggle} filterClick={filterClick} />
                    <Stack w='100%' px={40}>
                        <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                        <Grid>
                            {listings.map((item, index) => (
                                <Grid.Col sm={4} key={index}>
                                    <ArtCardComponent item={item} />
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Stack>
                </Flex>
            </Container>
        </>
    );

    /*
            <Container fluid px={60} mt={40}>
                <Title order={2}>Instagram Artworks</Title>
                <Grid mt={24}>
                    {instagramArtworkItems.map((item, index) => (
                        <Grid.Col sm={3} key={index}>
                            <InstagramArtCard name={item.name} handle={item.handle} art={item.art} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
    */
};

const ArtistGallery = dynamic(() => Promise.resolve(ArtistGalleryWithoutSSR), {
    ssr: false,
});

export { ArtistGallery };
