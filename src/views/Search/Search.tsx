import { ArtCardComponent, SortHeader } from '@/components';
import { SearchBar } from '@/components/SearchBar';
import useSearchBar from '@/components/SearchBar/useSearchBar';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import { useGlobalState } from '@/store';
import { Container, Flex, Grid, Stack } from '@mantine/core';

const Search = () => {
    const { opened, toggle } = useSearchBar();
    const { filterClick, filterPills } = useSortHeader();
    const { getSearchResults } = useGlobalState();
    // const { artists, art, galleries, museums } = getSearchResults();
    const { art } = getSearchResults();

    return (
        <Container fluid px='4%'>
            <Flex direction='row' sx={{ backgroundColor: '#FAFAFA' }} pb={100}>
                <SearchBar opened={opened} toggle={toggle} filterClick={filterClick} />
                <Stack w='100%' px={40}>
                    <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                    <Grid>
                        {art.map((item, index) => (
                            <Grid.Col sm={4} key={index}>
                                <ArtCardComponent item={item} />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Flex>
        </Container>
    );

    /*
                        {artists.map((item, index) => (
                            <>
                                {item.id ? (
                                    <Grid.Col sm={4} key={index}>
                                        <ArtistGalleryCard
                                            picture={item.bioFullSizeImageUrl}
                                            name={`${item.firstName} ${item.lastName}`}
                                            location={'Location Placeholder'}
                                        />
                                    </Grid.Col>
                                ) : (
                                    <></>
                                )}
                            </>
                        ))}
                        {galleries.map((item, index) => (
                            <>
                                {item.id ? (
                                    <Grid.Col sm={4} key={index}>
                                        <ArtistGalleryCard
                                            picture={item.logoImageUrl}
                                            name={item.name}
                                            location={'Location Placeholder'}
                                        />
                                    </Grid.Col>
                                ) : (
                                    <></>
                                )}
                            </>
                        ))}
                        {museums.map((item, index) => (
                            <>
                                {item.id ? (
                                    <Grid.Col sm={4} key={index}>
                                        <ArtistGalleryCard
                                            picture={item.logoImageUrl}
                                            name={item.name}
                                            location={'Location Placeholder'}
                                        />
                                    </Grid.Col>
                                ) : (
                                    <></>
                                )}
                            </>
                        ))}
    */
};

export { Search };
