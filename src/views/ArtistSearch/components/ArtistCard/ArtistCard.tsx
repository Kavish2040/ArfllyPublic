import { ArtCarousel, Text } from '@/components';
import { Center, Container, Grid, Group, Image, Stack, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { ChevronRight } from 'tabler-icons-react';

type ArtistItem = {
    listings: any;
    firstName: string;
    lastName: string;
    bioFullSizeImageUrl: string;
    logoImageUrl: string;
    token: string;
};

type ArtistProp = {
    artist: ArtistItem;
};

const ArtistCard = ({ artist }: ArtistProp) => {
    const router = useRouter();
    const theme = useMantineTheme();
    const { listings, firstName, lastName, logoImageUrl, token } = artist;
    return (
        <Container fluid mt={75}>
            <Grid>
                <Grid.Col sm={1}>
                    <Image
                        src={logoImageUrl}
                        alt="Artist's Profile Picture"
                        width={72}
                        height={72}
                        radius={999}
                        withPlaceholder
                    />
                </Grid.Col>
                <Grid.Col sm={4}>
                    <Stack spacing='xs'>
                        <Text noMargin fz={18} fw={400}>
                            {firstName} {lastName}
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
                            onClick={() => router.push(`/artist/${token}`)}
                        >
                            <Text noMargin fz={18} fw={400}>
                                View profile
                            </Text>
                            <ChevronRight />
                        </Group>
                    </Center>
                </Grid.Col>
            </Grid>
            <Container p={0} size='md' fluid>
                <ArtCarousel viewButton={false} art={listings} />
            </Container>
        </Container>
    );
};

export { ArtistCard };
