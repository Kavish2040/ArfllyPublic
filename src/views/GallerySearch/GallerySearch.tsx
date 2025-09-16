import { SortHeader } from '@/components';
import useSortHeader from '@/components/SortHeader/useSortHeader';
import { Container, Divider, Flex, Grid, Stack } from '@mantine/core';
import { GalleryCard, GallerySearchFilter } from './components';
import useGallerySearch from './useGallerySearch';

const GallerySearch = () => {
    const { filterPills } = useSortHeader();
    const { opened, toggle, getSearchResults } = useGallerySearch();
    const { galleries } = getSearchResults();

    return (
        <Container fluid px='4%'>
            <Flex direction='row' sx={{ backgroundColor: '#FAFAFA' }} pb={100}>
                <GallerySearchFilter opened={opened} toggle={toggle} />
                <Stack w='100%' px={40}>
                    <SortHeader opened={opened} filterPills={filterPills} toggle={toggle} />
                    <Grid>
                        {galleries.map((item, index) =>
                            item.id ? (
                                <Grid.Col sm={12} key={index}>
                                    <GalleryCard gallery={item} />
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

export { GallerySearch };
