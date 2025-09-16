import { Text } from '@/components';
import useTransactions from '@/views/Transactions/useTransactions';
import {
    Anchor,
    Button,
    Container,
    Divider,
    Flex,
    Group,
    Popover,
    Radio,
    Stack,
    Title,
    useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

const Transactions = () => {
    const theme = useMantineTheme();
    const [transactions, setTransactions] = useState(false);
    const transactionsTestClick = () => {
        setTransactions(!transactions);
    };
    const { testTransactionsCards, selectedStatus, setSelectedStatus } = useTransactions();

    return (
        <Container fluid p={0} bg={theme.other.colors.footerFont} pt={88}>
            <Container>
                <Group mb={48} position='apart'>
                    <Stack>
                        <Group spacing='xs'>
                            <Anchor href='/' color='black' fz={14} fw={400}>
                                Account
                            </Anchor>
                            <Text fz={14} fw={400} noMargin>
                                &gt;
                            </Text>
                            <Anchor href='helpcenter' color='black' fz={14} fw={400}>
                                Transactions
                            </Anchor>
                        </Group>
                        <Title order={3}>Transactions</Title>
                    </Stack>
                </Group>
                <Button onClick={transactionsTestClick}>transactions test button to show transaction cards</Button>
                {transactions && (
                    <Flex>
                        <Popover width='25vw' position='bottom-end'>
                            <Popover.Target>
                                <Button size='lg' variant='subtle' p={0} ml='auto'>
                                    Sort by <ChevronDown />
                                </Button>
                            </Popover.Target>
                            <Popover.Dropdown p={20}>
                                <Radio.Group
                                    value={selectedStatus}
                                    onChange={(value: string) => setSelectedStatus(value)}
                                >
                                    <Stack spacing='xl'>
                                        <Radio value='recent' label='Most recent' />
                                        <Radio value='Shipped' label='Shipped' />
                                        <Radio value='Delivered' label='Delivered' />
                                        <Radio value='Open purchase request' label='Open purchase request' />
                                        <Radio value='Purchased' label='Purchased' />
                                    </Stack>
                                </Radio.Group>
                            </Popover.Dropdown>
                        </Popover>
                    </Flex>
                )}
                <Divider />
                {!transactions && (
                    <>
                        <Text fz={18} fw={400}>
                            Transaction history
                        </Text>
                        <Text noMargin fz={18} fw={300} pb={178}>
                            No transactions made
                        </Text>
                    </>
                )}
                {transactions && testTransactionsCards}
            </Container>
        </Container>
    );
};

export { Transactions };
