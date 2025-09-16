import { ArtCardComponent, SearchBar, SortHeader } from '@/components';
import useSearchBar from '@/components/SearchBar/useSearchBar';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import useDiscover from '@/views/Discover/useDiscover';
import { Container, Flex, Grid, Stack } from '@mantine/core';

const YourLikesComponent = () => {
    const { opened, toggle } = useSearchBar();
    const { filterClick, filterPills } = useSortHeader();
    const { discoverForYouPlaceholder } = useDiscover();
    return (
        <Container fluid>
            <Flex direction='row'>
                <SearchBar opened={opened} toggle={toggle} filterClick={filterClick} />
                <Stack>
                    <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                    <Grid>
                        {discoverForYouPlaceholder.map((item, index) => (
                            <Grid.Col sm={4} key={index}>
                                <ArtCardComponent item={item} />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Flex>
        </Container>
    );
};

export { YourLikesComponent };
