import { Text } from '@/components';
import { Button, Checkbox, Divider, Group, Paper, Stack, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import usePurchaseRequest from '../../usePurchaseRequest';

type Props = {
    button?: boolean;
    paymentType?: any;
};

const TotalCard = ({ button, paymentType }: Props) => {
    const theme = useMantineTheme();
    const { handleRouteToSent } = usePurchaseRequest();

    return (
        <Paper p={24} sx={{ border: '1px solid #D1C9BF', borderRadius: 0 }}>
            <Group position='apart'>
                <Text fz={18} fw={400} noMargin>
                    Total
                </Text>
                <Text fz={18} fw={400} noMargin>
                    ${'total placeholder'}
                </Text>
            </Group>
            <Group mt={40} align='start' spacing='xl'>
                <Image width={150} height={150} src='/artworkPlaceholder.png' alt='Purchase Request Artwork' />
                <Stack spacing='xs'>
                    <Text noMargin fw={500} td='underline'>
                        {'artwork name placeholder'}
                    </Text>
                    <Text noMargin fw={300} color={theme.other.colors.secondaryText}>
                        {'artists name placeholder'}
                    </Text>
                </Stack>
            </Group>
            <Divider mt={24} />
            <Group position='apart' mt={32}>
                <Text noMargin fz={18} fw={400}>
                    Subtotal
                </Text>
                <Text noMargin fz={18} fw={400}>
                    ${'subtotal placeholder'}
                </Text>
            </Group>
            <Group position='apart' mt={5}>
                <Text noMargin fz={18} fw={400}>
                    Tax
                </Text>
                <Text noMargin fz={18} fw={400}>
                    ${'tax placeholder'}
                </Text>
            </Group>
            <Group position='apart' mt={5}>
                <Text noMargin fz={18} fw={400}>
                    Shipping
                </Text>
                <Text noMargin fz={18} fw={400}>
                    ${'ship placeholder'}
                </Text>
            </Group>
            <Group position='apart' mt={5}>
                <Text noMargin fz={18} fw={700}>
                    Total
                </Text>
                <Text noMargin fz={18} fw={700}>
                    ${'total placeholder'}
                </Text>
            </Group>
            <Checkbox label={'Disclaimer placeholder'} mt={40} />
            {button && (
                <Button
                    variant='filled'
                    fullWidth
                    size='lg'
                    radius='xl'
                    mt={40}
                    onClick={() => handleRouteToSent(paymentType)}
                >
                    Send purchase request
                </Button>
            )}
            <Text fw={300} noMargin pt={40}>
                Your payment method will not be charged until we are able to confirm the artwork is available for
                purchase.
            </Text>
        </Paper>
    );
};

export { TotalCard };
