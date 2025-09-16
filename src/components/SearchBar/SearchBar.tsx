import {
    Accordion,
    Button,
    Center,
    Checkbox,
    createStyles,
    Divider,
    Flex,
    Group,
    Paper,
    RangeSlider,
    Stack,
    Title,
} from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import { Circle, LayoutSidebarRightExpand, Plus } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
    slideContent: {
        width: '0',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
    },
    slideContentOpen: {
        width: '400px',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
    },
}));

type Props = {
    opened: any;
    toggle: any;
    filterClick: any;
};

const SearchBar = ({ opened, toggle, filterClick }: Props) => {
    const { classes, cx } = useStyles();

    return (
        <Paper bg='white' className={cx(classes.slideContent, { [classes.slideContentOpen]: opened })}>
            <Center pt={30}>
                <Stack w='100%' px='5%'>
                    <Group position='apart'>
                        <Title order={2} fw={400}>
                            Art
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
                        <Accordion.Item value='price'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Price
                            </Accordion.Control>
                            <Accordion.Panel mt={40} mb={10}>
                                <RangeSlider
                                    defaultValue={[0, 50000]}
                                    min={0}
                                    max={50000}
                                    label={null}
                                    marks={[
                                        { value: 0, label: '$0' },
                                        { value: 50000, label: '$50,000+' },
                                    ]}
                                />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='type'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Type
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox.Group>
                                    <Checkbox value='drawing' label='Drawing' pb={20} onClick={(e) => filterClick(e)} />
                                    <Checkbox
                                        value='painting'
                                        label='Painting'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='photography'
                                        label='Photography'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='sculpture'
                                        label='Sculpture'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='3d object'
                                        label='3D Object'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='multiple'
                                        label='Print/Multiple'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                </Checkbox.Group>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='medium'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Medium
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox.Group>
                                    <Checkbox value='oil' label='Oil' pb={20} onClick={(e) => filterClick(e)} />
                                    <Checkbox value='acrylic' label='Acrylic' pb={20} onClick={(e) => filterClick(e)} />
                                    <Checkbox
                                        value='watercolor'
                                        label='Watercolor'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox value='wax' label='Wax' pb={20} onClick={(e) => filterClick(e)} />
                                    <Checkbox
                                        value='charcoal'
                                        label='Charcoal'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Accordion.Item value='mediumMore' sx={{ borderBottom: 0 }}>
                                        <Accordion.Control px={0} fz={14} fw={400}>
                                            View more
                                        </Accordion.Control>
                                        <Accordion.Panel>placeholder</Accordion.Panel>
                                    </Accordion.Item>
                                </Checkbox.Group>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='color'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Color
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Flex direction='row' mb={10} sx={{ justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'red' }} />}
                                        >
                                            Red
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'orange' }} />}
                                        >
                                            Orange
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'yellow' }} />}
                                        >
                                            Yellow
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'blue' }} />}
                                        >
                                            Blue
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'green' }} />}
                                        >
                                            Green
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'purple' }} />}
                                        >
                                            Purple
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'pink' }} />}
                                        >
                                            Pink
                                        </Button>
                                    </Stack>
                                    <Stack>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'brown' }} />}
                                        >
                                            Brown
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'black' }} />}
                                        >
                                            Black
                                        </Button>
                                        <Button variant='subtle' leftIcon={<Circle size={40} strokeWidth={1} />}>
                                            White
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'grey' }} />}
                                        >
                                            Grey
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'cyan' }} />}
                                        >
                                            Cyan
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'gold' }} />}
                                        >
                                            Gold
                                        </Button>
                                        <Button
                                            variant='subtle'
                                            leftIcon={<IconCircleFilled size={40} style={{ color: 'magenta' }} />}
                                        >
                                            Magenta
                                        </Button>
                                    </Stack>
                                </Flex>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='width'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Width
                            </Accordion.Control>
                            <Accordion.Panel mt={40} mb={10}>
                                <RangeSlider
                                    defaultValue={[0, 500]}
                                    min={0}
                                    max={500}
                                    label={null}
                                    marks={[
                                        { value: 0, label: '0 in' },
                                        { value: 500, label: '500+ in' },
                                    ]}
                                />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='height'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Height
                            </Accordion.Control>
                            <Accordion.Panel mt={40} mb={10}>
                                <RangeSlider
                                    defaultValue={[0, 500]}
                                    min={0}
                                    max={500}
                                    label={null}
                                    marks={[
                                        { value: 0, label: '0 in' },
                                        { value: 500, label: '500+ in' },
                                    ]}
                                />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='Subject'>
                            <Accordion.Control px={0} fz={18} fw={500}>
                                Subject
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Checkbox.Group>
                                    <Checkbox
                                        value='abstract'
                                        label='Abstract'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox value='realism' label='Realism' pb={20} onClick={(e) => filterClick(e)} />
                                    <Checkbox
                                        value='stillLife'
                                        label='Still Life'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='geometric'
                                        label='Geometric'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Checkbox
                                        value='figurative'
                                        label='Figurative'
                                        pb={20}
                                        onClick={(e) => filterClick(e)}
                                    />
                                    <Accordion.Item value='subjectMore' sx={{ borderBottom: 0 }}>
                                        <Accordion.Control px={0} fz={14} fw={400}>
                                            View more
                                        </Accordion.Control>
                                        <Accordion.Panel>placeholder</Accordion.Panel>
                                    </Accordion.Item>
                                </Checkbox.Group>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Stack>
            </Center>
        </Paper>
    );
};

export { SearchBar };
