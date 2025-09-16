import { Text } from '@/components';
import { Container, Divider, Grid, Paper, useMantineTheme } from '@mantine/core';
import { EmailSection, PaymentSection, ShippingBillingSection, TotalCard } from './components';
import usePurchaseRequest from './usePurchaseRequest';

const PurchaseRequest = () => {
    const theme = useMantineTheme();
    const { paymentType, setPaymentType } = usePurchaseRequest();

    return (
        <Container fluid p={0} pt={60} pb={100} bg={theme.other.colors.footerFont}>
            <Container size='xl'>
                <Text fz={24} fw={500}>
                    Send a purchase request
                </Text>
                <Text fz={18} fw={300} color={theme.other.colors.secondaryText} maw={568}>
                    Once you submit a purchase request, we will contact the seller on your behalf. If the artwork is
                    available, your purchase will be fulfilled.
                </Text>
                <Grid>
                    <Grid.Col sm={8}>
                        <Paper p={24} sx={{ border: '1px solid #D1C9BF', borderRadius: 0 }}>
                            <PaymentSection paymentType={paymentType} setPaymentType={setPaymentType} />
                            <Divider my={24} />
                            <EmailSection />
                            <Divider my={24} />
                            <ShippingBillingSection />
                        </Paper>
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <TotalCard button paymentType={paymentType} />
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
};

export { PurchaseRequest };
