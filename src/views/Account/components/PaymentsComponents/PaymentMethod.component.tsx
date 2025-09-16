import { PillComponent, Text } from '@/components';
import { Button, Checkbox, Group, Image, NativeSelect, Stack, TextInput, useMantineTheme } from '@mantine/core';
import InputMask from 'react-input-mask';
import { ChevronDown } from 'tabler-icons-react';
import useAccount from '../../useAccount';

type Props = {
    cardType: string;
    lastFour: string;
    name: string;
    expires: string;
    primary: any;
};

const PaymentMethodComponent = ({ cardType, lastFour, name, expires, primary }: Props) => {
    const theme = useMantineTheme();
    const { deleteCard, update, setUpdate, personalInfoSave } = useAccount();

    return (
        <>
            {!update && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            {cardType} ending in {lastFour}
                        </Text>
                        {primary ? <PillComponent title='Primary' marginRight='auto' /> : ''}
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUpdate(true)}
                        >
                            Manage
                        </Button>
                    </Group>
                    <Text fz={18} fw={300} noMargin pt={12}>
                        {name}
                    </Text>
                    <Text fz={18} fw={300} noMargin pt={12}>
                        Expires {expires}
                    </Text>
                </>
            )}
            {update && (
                <Stack spacing='none'>
                    <Text fz={18} fw={400} noMargin pt={10}>
                        Required*
                    </Text>
                    <Group position='apart'>
                        <Group mt={24}>
                            <PillComponent title={<Image src={'/visaLogo.png'} width={35} alt='Visa Logo' />} />
                            <PillComponent
                                title={<Image src={'/mastercardLogo.png'} width={35} alt='Mastercard Logo' />}
                            />
                            <PillComponent title={<Image src={'/amexLogo.png'} width={35} alt='Amex Logo' />} />
                            <PillComponent title={<Image src={'/discoverLogo.png'} width={60} alt='Discover Logo' />} />
                        </Group>
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUpdate(false)}
                        >
                            Cancel
                        </Button>
                    </Group>
                    <InputMask mask='9999 9999 9999 9999' maskChar={null}>
                        {(inputProps) => (
                            <TextInput
                                {...inputProps}
                                label='Card number'
                                w={369}
                                required
                                mt={40}
                                placeholder={'card placeholder'}
                            />
                        )}
                    </InputMask>
                    <Group position='apart' mt={40}>
                        <InputMask mask='99/99' maskChar={null}>
                            {(inputProps) => (
                                <TextInput
                                    {...inputProps}
                                    label='Expiration'
                                    w={369}
                                    required
                                    placeholder={'date placeholder'}
                                />
                            )}
                        </InputMask>
                        <InputMask mask='9999' maskChar={null}>
                            {(inputProps) => (
                                <TextInput
                                    {...inputProps}
                                    label='CCV'
                                    w={290}
                                    required
                                    placeholder={'ccv placeholder'}
                                />
                            )}
                        </InputMask>
                    </Group>
                    <NativeSelect
                        label='Country/region'
                        data={['United States', 'Canada']}
                        rightSection={<ChevronDown />}
                        rightSectionWidth={40}
                        mt={40}
                        w={369}
                    />
                    <Checkbox mt={40} label='Set to default payment method' /> {/* for api call to set default card */}
                    <Group mt={40}>
                        <Button size='lg' w={140} onClick={() => personalInfoSave('payment method')}>
                            Save
                        </Button>
                        <Button variant='outline' size='lg' radius='xl' w={180} onClick={() => deleteCard()}>
                            Delete payment
                        </Button>
                    </Group>
                </Stack>
            )}
        </>
    );
};

export { PaymentMethodComponent };
