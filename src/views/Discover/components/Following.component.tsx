import { SearchBar, SortHeader } from '@/components';
import useSearchBar from '@/components/SearchBar/useSearchBar';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import useDiscover from '@/views/Discover/useDiscover';
import { GalleryCard } from '@/views/GallerySearch/components';
import { Container, Flex, Grid, Stack } from '@mantine/core';

const FollowingComponent = () => {
    const { opened, toggle } = useSearchBar();
    const { filterClick, filterPills } = useSortHeader();
    const { followingPlaceholder } = useDiscover();
    return (
        <Container p={0} fluid>
            <Flex direction='row'>
                <SearchBar opened={opened} toggle={toggle} filterClick={filterClick} />
                <Stack>
                    <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                    <Grid px='8%'>
                        {followingPlaceholder.map((item, index) => (
                            <Grid.Col sm={12} key={index}>
                                <GalleryCard gallery={item} />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Flex>
        </Container>
    );
};

export { FollowingComponent };
