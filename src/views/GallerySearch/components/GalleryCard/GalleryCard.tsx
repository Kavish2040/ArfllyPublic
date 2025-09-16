import { ArtCarousel, Text } from '@/components';
import { Center, Container, Grid, Group, Image, Stack, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { ChevronRight } from 'tabler-icons-react';

type GalleryItem = {
    listings: any;
    name: string;
    logoImageUrl: string;
    token: string;
};

type GalleryCardProps = {
    gallery: GalleryItem;
};

const GalleryCard = ({ gallery }: GalleryCardProps) => {
    const router = useRouter();
    const theme = useMantineTheme();
    const { name, listings, logoImageUrl, token } = gallery;
    return (
        <Container fluid mt={75}>
            <Grid>
                <Grid.Col sm={1}>
                    <Image
                        src={logoImageUrl}
                        alt="Gallery's Profile Picture"
                        width={72}
                        height={72}
                        radius={999}
                        withPlaceholder
                    />
                </Grid.Col>
                <Grid.Col sm={4}>
                    <Stack spacing='xs'>
                        <Text noMargin fz={18} fw={400}>
                            {name}
                        </Text>
                        <Text noMargin fz={18} fw={400} color={theme.other.colors.secondaryText}>
                            {'Location placeholder'}
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col sm={7}>
                    <Center h='100%'>
                        <Group
                            w='100%'
                            position='right'
                            className='clickable'
                            onClick={() => router.push(`/gallery/${token}`)}
                        >
                            <Text noMargin fz={18} fw={400}>
                                View profile
                            </Text>
                            <ChevronRight />
                        </Group>
                    </Center>
                </Grid.Col>
            </Grid>
            <Container p={0} fluid>
                <ArtCarousel viewButton={false} art={listings} />
            </Container>
        </Container>
    );
};

export { GalleryCard };
