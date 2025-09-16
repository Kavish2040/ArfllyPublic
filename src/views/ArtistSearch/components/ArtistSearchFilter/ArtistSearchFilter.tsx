import useArtistSearch from '@/views/ArtistSearch/useArtistSearch';
import { Accordion, Center, Checkbox, Divider, Group, NativeSelect, Paper, Stack, Title } from '@mantine/core';
import { LayoutSidebarRightExpand, Plus } from 'tabler-icons-react';

type Props = {
    opened: any;
    toggle: any;
};

const ArtistSearchFilter = ({ opened, toggle }: Props) => {
    const { cx, classes } = useArtistSearch();

    return (
        <Paper bg='white' className={cx(classes.slideContent, { [classes.slideContentOpen]: opened })}>
            <Center pt={30}>
                <Stack w='100%' pr={75}>
                    <Group position='apart'>
                        <Title order={2} fw={400}>
                            Artists
                        </Title>
                        <LayoutSidebarRightExpand onClick={toggle} style={{ cursor: 'pointer' }} />
                    </Group>
                    <Divider />
                    <Accordion
                        multiple
                        chevron={<Plus />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item value='artworks'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Artworks
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox label='Show only artworks for sale' />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='type'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Type
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox.Group>
                                    <Checkbox value='illustrator' label='Illustrator' pb={20} />
                                    <Checkbox value='painter' label='Painter' pb={20} />
                                    <Checkbox value='photographer' label='Photographer' pb={20} />
                                    <Checkbox value='sculptor' label='Sculptor' pb={20} />
                                    <Checkbox value='mixedMedia' label='Mixed media' pb={20} />
                                </Checkbox.Group>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='medium'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Our categories
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox.Group>
                                    <Checkbox value='bestSellers' label='Best sellers' pb={20} />
                                    <Checkbox value='popular' label='Popular' pb={20} />
                                    <Checkbox value='emerging' label='Emerging' pb={20} />
                                    <Checkbox value='wax' label='Wax' pb={20} />
                                    <Checkbox value='new' label='New' pb={20} />
                                    <Checkbox value='onlyOnArtflly' label='Only on artflly' pb={20} />
                                </Checkbox.Group>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='color'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Region
                            </Accordion.Control>
                            <Accordion.Panel>
                                <NativeSelect data={['placeholder']} />
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Stack>
            </Center>
        </Paper>
    );
};

export { ArtistSearchFilter };
