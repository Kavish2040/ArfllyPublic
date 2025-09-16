import { PillComponent, Text } from '@/components';
import { Button, Group, Image, NativeSelect, Stack, TextInput, useMantineTheme } from '@mantine/core';
import { IconCircle1Filled, IconCircleCheckFilled } from '@tabler/icons-react';
import { ChevronDown } from 'tabler-icons-react';
import usePurchaseRequest from '../../usePurchaseRequest';

type Props = {
    paymentType: any;
    setPaymentType: any;
};

const PaymentSection = ({ paymentType, setPaymentType }: Props) => {
    const theme = useMantineTheme();
    const { edit, setEdit } = usePurchaseRequest();

    return (
        <>
            {!edit && (
                <Group position='apart' align='flex-start'>
                    <Group align='flex-start'>
                        <IconCircleCheckFilled size={32} style={{ color: theme.other.colors.main }} />
                        <Stack spacing='none'>
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
                    </Group>
                    <Button
                        component='a'
                        variant='subtle'
                        color={theme.other.colors.offBlack}
                        td='underline'
                        fz={18}
                        p={0}
                        onClick={() => setEdit(true)}
                    >
                        Edit
                    </Button>
                </Group>
            )}
            {edit && paymentType !== 'amazonPay' && paymentType !== 'payPal' && paymentType !== 'applePay' && (
                <Group align='flex-start'>
                    <IconCircle1Filled size={32} style={{ color: theme.other.colors.main }} />
                    <Stack maw={565}>
                        <Text noMargin fz={18} fw={400}>
                            Payment
                        </Text>
                        <Button
                            fullWidth
                            variant='outline'
                            radius='xl'
                            size='lg'
                            styles={{
                                root: { border: '1px solid #E0E0E9' },
                                label: { fontSize: 14, fontWeight: 400 },
                            }}
                            onClick={() => setPaymentType('amazonPay')}
                        >
                            <Image src='./amazonPayLogo.svg' width={123} height={24} alt='Amazon Pay Logo' />
                        </Button>
                        <Button
                            fullWidth
                            variant='outline'
                            radius='xl'
                            size='lg'
                            styles={{
                                root: { border: '1px solid #E0E0E9' },
                                label: { fontSize: 14, fontWeight: 400 },
                            }}
                            onClick={() => setPaymentType('payPal')}
                        >
                            <Image src='./payPalLogo.png' alt='PayPal Logo' />
                        </Button>
                        <Button
                            fullWidth
                            variant='outline'
                            radius='xl'
                            size='lg'
                            styles={{
                                root: { border: '1px solid #E0E0E9' },
                                label: { fontSize: 14, fontWeight: 400 },
                            }}
                            onClick={() => setPaymentType('applePay')}
                        >
                            <Image src='./applePayLogo.svg' width={59} height={22} alt='Apple Pay Logo' />
                        </Button>
                        <Button
                            fullWidth
                            variant='outline'
                            radius='xl'
                            size='lg'
                            styles={{
                                root: { border: '1px solid #5F655B' },
                                label: { fontSize: 14, fontWeight: 400 },
                            }}
                        >
                            Credit card
                        </Button>
                        <Group>
                            <PillComponent title={<Image src={'./visaLogo.png'} width={35} alt='Visa Logo' />} />
                            <PillComponent
                                title={<Image src={'./mastercardLogo.png'} width={35} alt='Mastercard Logo' />}
                            />
                            <PillComponent title={<Image src={'./amexLogo.png'} width={35} alt='Amex Logo' />} />
                            <PillComponent
                                title={<Image src={'./discoverLogo.png'} width={60} alt='Discover Logo' />}
                            />
                        </Group>
                        <TextInput label='Card number' mt={20} />
                        <Group mt={20}>
                            <TextInput label='Expiration' />
                            <TextInput label='CCV' />
                        </Group>
                        <NativeSelect
                            label='Country/region'
                            data={['United States', 'Canada']}
                            rightSection={<ChevronDown />}
                            rightSectionWidth={40}
                            mt={20}
                        />
                    </Stack>
                </Group>
            )}
            {edit && paymentType === 'amazonPay' && (
                <Group align='flex-start'>
                    <IconCircle1Filled size={32} style={{ color: theme.other.colors.main }} />
                    <Stack maw={565}>
                        <Text noMargin fz={18} fw={400}>
                            Payment
                        </Text>
                        <PillComponent title={<Image src={'./amazonPayLogo.svg'} width={85} alt='Amazon Pay Logo' />} />
                    </Stack>
                </Group>
            )}
            {edit && paymentType === 'payPal' && (
                <Group align='flex-start'>
                    <IconCircle1Filled size={32} style={{ color: theme.other.colors.main }} />
                    <Stack maw={565}>
                        <Text noMargin fz={18} fw={400}>
                            Payment
                        </Text>
                        <PillComponent title={<Image src={'./payPalLogo.png'} width={65} alt='PayPal Logo' />} />
                    </Stack>
                </Group>
            )}
            {edit && paymentType === 'applePay' && (
                <Group align='flex-start'>
                    <IconCircle1Filled size={32} style={{ color: theme.other.colors.main }} />
                    <Stack maw={565}>
                        <Text noMargin fz={18} fw={400}>
                            Payment
                        </Text>
                        <PillComponent title={<Image src={'./applePayLogo.svg'} width={45} alt='Apple Pay Logo' />} />
                    </Stack>
                </Group>
            )}
        </>
    );
};

export { PaymentSection };
