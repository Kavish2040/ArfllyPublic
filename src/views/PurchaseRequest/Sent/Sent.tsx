import { PillComponent, Text } from '@/components';
import { Container, Divider, Grid, Image, Paper, Stack, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { TotalCard } from '../components';

const Sent = () => {
    const theme = useMantineTheme();
    const router = useRouter();
    const paymentType = router.query.paymentType;

    return (
        <Container fluid p={0} pt={60} pb={100} bg={theme.other.colors.footerFont}>
            <Container size='xl'>
                <Grid>
                    <Grid.Col sm={8}>
                        <Paper p={24} sx={{ border: '1px solid #D1C9BF', borderRadius: 0 }}>
                            <Stack align='center'>
                                <Image src={'/emailIcon.png'} width={100} height={100} alt='Email Icon' />
                                <Text fz={24} fw={400} noMargin pt={24}>
                                    Your purchase request has been sent
                                </Text>
                                <Text fz={14} fw={300} noMargin pt={12} ta='center' maw={600}>
                                    Your confirmation number is <b>{'confirmation number placeholder'}</b>. We&apos;ll
                                    contact the sender on your behalf to provide you an update and email you at{' '}
                                    <b>{'email placeholder'}</b> once completed.
                                </Text>
                            </Stack>
                            <Divider my={24} />
                            <Stack spacing='xs'>
                                <Text fz={18} fw={400} noMargin>
                                    Shipping & Billing
                                </Text>
                                <Text fz={18} fw={300} noMargin>
                                    {'buyer name placeholder'}
                                </Text>
                                <Text fz={18} fw={300} noMargin>
                                    {'street address and suite number placeholder'}
                                </Text>
                                <Text fz={18} fw={300} noMargin>
                                    {'city, state, zip placeholder'}
                                </Text>
                                <Text fz={18} fw={300} noMargin>
                                    {'country placeholder'}
                                </Text>
                            </Stack>
                            <Divider my={24} />
                            {!['amazonPay', 'payPal', 'applePay'].includes(paymentType as string) && (
                                <Stack spacing='xs'>
                                    <Text fz={18} noMargin>
                                        Payment
                                    </Text>
                                    <Text fz={18} pt={5} noMargin>
                                        {'Card type placeholder'} ending in {'last 4 number placeholder'}
                                    </Text>
                                    <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                        {'Name placeholder'}
                                    </Text>
                                    <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                        {'Card expires placeholder'}
                                    </Text>
                                </Stack>
                            )}
                            {paymentType === 'amazonPay' && (
                                <Stack maw={565}>
                                    <Text noMargin fz={18} fw={400}>
                                        Payment
                                    </Text>
                                    <PillComponent
                                        title={<Image src={'/amazonPayLogo.svg'} width={85} alt='Amazon Pay Logo' />}
                                    />
                                </Stack>
                            )}
                            {paymentType === 'payPal' && (
                                <Stack maw={565}>
                                    <Text noMargin fz={18} fw={400}>
                                        Payment
                                    </Text>
                                    <PillComponent
                                        title={<Image src={'/payPalLogo.png'} width={65} alt='PayPal Logo' />}
                                    />
                                </Stack>
                            )}
                            {paymentType === 'applePay' && (
                                <Stack maw={565}>
                                    <Text noMargin fz={18} fw={400}>
                                        Payment
                                    </Text>
                                    <PillComponent
                                        title={<Image src={'/applePayLogo.svg'} width={45} alt='Apple Pay Logo' />}
                                    />
                                </Stack>
                            )}
                        </Paper>
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <TotalCard />
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
};

export { Sent };
