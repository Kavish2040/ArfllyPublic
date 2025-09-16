import { Text } from '@/components';
import {
    ContactSupportModal,
    ContactSupportSent,
} from '@/views/Transactions/TransactionDetail/TransactionDetailModals';
import useTransactions from '@/views/Transactions/useTransactions';
import {
    Anchor,
    Button,
    Center,
    Container,
    Grid,
    Group,
    Paper,
    Stack,
    Stepper,
    Title,
    useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

const TransactionDetail = () => {
    const theme = useMantineTheme();
    const { contactSupport, contactSupportHandlers, contactSupportSent, contactSupportSentHandlers } =
        useTransactions();

    return (
        <Container fluid p={0} pb={94} bg={theme.other.colors.footerFont}>
            <Container size='md' pt={60}>
                <Group position='apart'>
                    <Stack w='100%'>
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
                            <Text fz={14} fw={400} noMargin>
                                &gt;
                            </Text>
                            <Anchor href='helpcenter' color='black' fz={14} fw={400}>
                                Order {'order number placeholder'}
                            </Anchor>
                        </Group>
                        <Group position='apart' w='100%' mt={20}>
                            <Title order={3}>Transaction Details</Title>
                            <Button size='lg' radius='xl' onClick={() => contactSupportHandlers.setTrue()}>
                                Contact support
                            </Button>
                        </Group>
                    </Stack>
                </Group>
            </Container>
            <Container
                size='md'
                bg='white'
                p={32}
                mt={40}
                sx={{ border: '1px solid var(--Stroke-Secondary, #D1C9BF)' }}
            >
                <Grid>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Order info
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={2}>
                        <Stack spacing='xl'>
                            <Text noMargin fz={14} fw={500}>
                                Time placed
                            </Text>
                            <Text noMargin fz={14} fw={500}>
                                Order number
                            </Text>
                            <Text noMargin fz={14} fw={500}>
                                Total
                            </Text>
                            <Text noMargin fz={14} fw={500}>
                                Sold by
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={6}>
                        <Stack spacing='xl'>
                            <Text noMargin fz={14} fw={300}>
                                {'time placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'order number placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                ${'price placeholder'}({'amount number'} item)
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'seller placeholder'}
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Grid mt={100}>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Artwork info
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <Image src='/artworkPlaceholder.png' alt='Purchased Art' width={250} height={250} />
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <Stack spacing='xl'>
                            <Text noMargin fz={14} fw={500} td='underline'>
                                {'artwork name placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                ${'price placeholder'} &middot; {'artist name placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'date placeholder'}
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Grid mt={100}>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Delivery info
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={8}>
                        <Stepper active={1} color={theme.other.colors.main}>
                            <Stepper.Step label='Purchase request&nbsp;sent' />
                            <Stepper.Step label='Purchased' />
                            <Stepper.Step label='Shipped' />
                            <Stepper.Step label='Delivered' />
                        </Stepper>
                    </Grid.Col>
                </Grid>
                <Grid mt={100}>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Tracking info
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={8}>
                        <Grid>
                            <Grid.Col sm={4}>
                                <Stack spacing='xl'>
                                    <Text noMargin fz={14} fw={500}>
                                        Carrier
                                    </Text>
                                    <Text noMargin fz={14} fw={500}>
                                        Number
                                    </Text>
                                    <Text noMargin fz={14} fw={500}>
                                        Shipping Service
                                    </Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col sm={4}>
                                <Stack spacing='xl'>
                                    <Text noMargin fz={14} fw={300}>
                                        {'carrier placeholder'}
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        {'tracking number placeholder'}
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        {'shipping speed placeholder'}
                                    </Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col sm={4}>
                                <Center h='100%'>
                                    <Button variant='outline' size='lg' radius='xl'>
                                        Track order
                                    </Button>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                </Grid>
                <Grid mt={100}>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Shipping address
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={8}>
                        <Stack spacing='xl'>
                            <Text noMargin fz={14} fw={300}>
                                {'shipping name placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'street placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'city state zip placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'country placeholder'}
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Grid mt={100}>
                    <Grid.Col sm={4}>
                        <Text noMargin fz={18} fw={700}>
                            Payment info
                        </Text>
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <Stack spacing='xl'>
                            <Text noMargin fz={14} fw={400}>
                                {'payment method placeholder'}
                            </Text>
                            <Text noMargin fz={14} fw={300}>
                                {'payment method name placeholder'}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <Paper bg={theme.other.colors.paperBackground}>
                            <Stack spacing='xl' p={16}>
                                <Group position='apart'>
                                    <Text noMargin fz={14} fw={500}>
                                        {'num ph'} item(s)
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        ${'price ph'}
                                    </Text>
                                </Group>
                                <Group position='apart'>
                                    <Text noMargin fz={14} fw={500}>
                                        Shipping
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        ${'ship ph'}
                                    </Text>
                                </Group>
                                <Group position='apart'>
                                    <Text noMargin fz={14} fw={500}>
                                        Tax
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        ${'tax ph'}
                                    </Text>
                                </Group>
                                <Group position='apart'>
                                    <Text noMargin fz={14} fw={500}>
                                        Total
                                    </Text>
                                    <Text noMargin fz={14} fw={300}>
                                        ${'total ph'}
                                    </Text>
                                </Group>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
            <ContactSupportModal
                opened={contactSupport}
                close={() => contactSupportHandlers.setFalse()}
                openModal={() => contactSupportHandlers.setTrue()}
                closeModal={() => contactSupportHandlers.setFalse()}
            />
            <ContactSupportSent
                opened={contactSupportSent}
                close={() => contactSupportSentHandlers.setFalse()}
                closeModal={() => contactSupportSentHandlers.setFalse()}
            />
        </Container>
    );
};

export { TransactionDetail };
