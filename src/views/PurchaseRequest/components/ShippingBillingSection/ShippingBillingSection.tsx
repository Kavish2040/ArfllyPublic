import { Text } from '@/components';
import { Button, Checkbox, Divider, Group, NativeSelect, Stack, TextInput, useMantineTheme } from '@mantine/core';
import { IconCircle3Filled, IconCircleCheckFilled } from '@tabler/icons-react';
import { ChevronDown } from 'tabler-icons-react';
import usePurchaseRequest from '../../usePurchaseRequest';

const ShippingBillingSection = () => {
    const theme = useMantineTheme();
    const { edit, setEdit, sameShipping, setSameShipping } = usePurchaseRequest();

    return (
        <>
            {!edit && (
                <Group position='apart' align='flex-start'>
                    <Group align='flex-start'>
                        <IconCircleCheckFilled size={32} style={{ color: theme.other.colors.main }} />
                        <Stack spacing='none'>
                            <Text fz={18} noMargin>
                                Shipping & Billing
                            </Text>
                            <Text fz={18} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                {'Name  '}
                            </Text>
                            <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                {'Street placeholder'}
                            </Text>
                            <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                {'Unit number placeholder'}
                            </Text>
                            <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                {'City, State, Zip placeholder'}
                            </Text>
                            <Text fz={18} fw={300} pt={5} color={theme.other.colors.secondaryText} noMargin>
                                {'Country placeholder'}
                            </Text>
                            <Checkbox label='My billing and shipping address are the same' mt={5} />
                            <Text fz={18} noMargin pt={32}>
                                Shipping method
                            </Text>
                            <Group position='apart' maw={350} mt={16}>
                                <Checkbox label='No-rush shipping' />
                                <Text fw={300} noMargin>
                                    ${'shipping price placeholder'}
                                </Text>
                            </Group>
                            <Group position='apart' maw={350} mt={16}>
                                <Checkbox label='Standard shipping' />
                                <Text fw={300} noMargin>
                                    ${'shipping price placeholder'}
                                </Text>
                            </Group>
                            <Group position='apart' maw={350} mt={16}>
                                <Checkbox label='Express shipping' />
                                <Text fw={300} noMargin>
                                    ${'shipping price placeholder'}
                                </Text>
                            </Group>
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
            {edit && (
                <Group align='flex-start' position='left' noWrap>
                    <IconCircle3Filled size={32} style={{ color: theme.other.colors.main }} />
                    <Stack maw={565}>
                        <Text noMargin fz={18} fw={400}>
                            Shipping address
                        </Text>
                        <NativeSelect
                            label='Country/region'
                            data={['United States', 'Canada']}
                            rightSection={<ChevronDown />}
                            rightSectionWidth={40}
                        />
                        <TextInput label='Street address' />
                        <TextInput label='Apt/suite (optional)' />
                        <TextInput label='City' />
                        <Group>
                            <TextInput label='State/region/county' />
                            <TextInput label='Zip code' />
                        </Group>
                        {sameShipping && (
                            <>
                                <Divider mt={10} />
                                <Text noMargin fz={18} fw={400}>
                                    Billing address
                                </Text>
                                <NativeSelect
                                    label='Country/region'
                                    data={['United States', 'Canada']}
                                    rightSection={<ChevronDown />}
                                    rightSectionWidth={40}
                                />
                                <TextInput label='Street address' />
                                <TextInput label='Apt/suite (optional)' />
                                <TextInput label='City' />
                                <Group>
                                    <TextInput label='State/region/county' />
                                    <TextInput label='Zip code' />
                                </Group>
                            </>
                        )}
                        <Checkbox
                            label='My billing and shipping address are the same'
                            onClick={() => {
                                setSameShipping(!sameShipping);
                            }}
                        />
                        <Text fz={18} noMargin pt={32}>
                            Shipping method
                        </Text>
                        <Group position='apart' maw={350}>
                            <Checkbox label='No-rush shipping' value='noRush' />
                            <Text fw={300} noMargin>
                                ${'shipping price placeholder'}
                            </Text>
                        </Group>
                        <Group position='apart' maw={350}>
                            <Checkbox label='Standard shipping' value='standard' />
                            <Text fw={300} noMargin>
                                ${'shipping price placeholder'}
                            </Text>
                        </Group>
                        <Group position='apart' maw={350}>
                            <Checkbox label='Express shipping' value='express' />
                            <Text fw={300} noMargin>
                                ${'shipping price placeholder'}
                            </Text>
                        </Group>
                    </Stack>
                </Group>
            )}
        </>
    );
};

export { ShippingBillingSection };
