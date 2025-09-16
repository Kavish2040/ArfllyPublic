import { SortHeader } from '@/components';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import { Container, Divider, Flex, Grid, Stack } from '@mantine/core';
import { ArtistCard, ArtistSearchFilter } from './components';
import useArtistSearch from './useArtistSearch';

const ArtistSearch = () => {
    const { filterPills } = useSortHeader();
    const { opened, toggle, getSearchResults } = useArtistSearch();
    const { artists } = getSearchResults();

    return (
        <Container fluid px='4%'>
            <Flex direction='row' sx={{ backgroundColor: '#FAFAFA' }} pb={100}>
                <ArtistSearchFilter opened={opened} toggle={toggle} />
                <Stack w='100%' px={40}>
                    <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                    <Grid>
                        {artists.map((item, index) =>
                            item.id ? (
                                <Grid.Col sm={12} key={index}>
                                    <ArtistCard artist={item} />
                                    <Divider />
                                </Grid.Col>
                            ) : (
                                <></>
                            )
                        )}
                    </Grid>
                </Stack>
            </Flex>
        </Container>
    );
};

export { ArtistSearch };
