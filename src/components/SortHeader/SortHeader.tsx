import { Text } from '@/components';
import { useGlobalState } from '@/store';
import useSearch from '@/views/Search/useSearch';
import { Button, Divider, Group, Popover, Radio, Stack } from '@mantine/core';
import router from 'next/router';
import { useState } from 'react';
import { ChevronDown, Filter } from 'tabler-icons-react';

type Props = {
    opened: any;
    filterPills: any;
    toggle: any;
    title?: boolean;
};

const SortHeader = ({ opened, toggle, filterPills, title }: Props) => {
    const { getSearchText } = useGlobalState();
    const [value, setValue] = useState('react');
    const { handleSearch } = useSearch();

    function radioNav(value: string): void {
        setValue(value);
        handleSearch(value);
        router.push(value);
    }

    return (
        <Stack>
            <Group position='apart' mt={41}>
                {!getSearchText() ? (
                    <Text>Browsing for new discoveries</Text>
                ) : (
                    <Text>Showing results for &quot;{getSearchText()}&quot;</Text>
                )}
                <Group>
                    {!opened && (
                        <Button size='lg' onClick={toggle}>
                            Filter <Filter />
                        </Button>
                    )}
                    <Popover width={275} position='bottom-end'>
                        <Popover.Target>
                            <Button
                                size='lg'
                                variant='subtle'
                                sx={{
                                    '&:hover': {
                                        background: 'none',
                                    },
                                }}
                            >
                                Sort by <ChevronDown />
                            </Button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <Radio.Group>
                                <Radio label='Best match' mt={20} />
                                <Radio label='Newly listed' mt={20} />
                                <Radio label='Lowest price' mt={20} />
                                <Radio label='Highest price' mt={20} />
                                <Radio label='A-Z' mt={20} />
                                <Radio label='Z-A' my={20} />
                            </Radio.Group>
                        </Popover.Dropdown>
                    </Popover>
                    <Popover width={250} position='bottom-end'>
                        <Popover.Target>
                            <Button
                                size='lg'
                                variant='subtle'
                                sx={{
                                    '&:hover': {
                                        background: 'none',
                                    },
                                }}
                            >
                                Display <ChevronDown />
                            </Button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <Radio.Group value={value} onChange={radioNav}>
                                <Radio label='Art' mt={10} value='/art' />
                                <Radio label='Artists' mt={10} value='/artists' />
                                <Radio label='Galleries' mt={10} value='/galleries' />
                            </Radio.Group>
                        </Popover.Dropdown>
                    </Popover>
                </Group>
            </Group>
            <Divider />
            <Group>{filterPills}</Group>
        </Stack>
    );
};

export { SortHeader };
