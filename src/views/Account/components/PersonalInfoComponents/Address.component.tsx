import { Text } from '@/components';
import { Button, Group, NativeSelect, Stack, TextInput, useMantineTheme } from '@mantine/core';
import InputMask from 'react-input-mask';
import { ChevronDown } from 'tabler-icons-react';
import useAccount from '../../useAccount';

type Props = {
    address: string;
};

const AddressComponent = ({ address }: Props) => {
    const theme = useMantineTheme();
    const { update, setUpdate } = useAccount();

    return (
        <>
            {!update && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            Shipping address
                        </Text>
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUpdate(true)}
                        >
                            Update
                        </Button>
                    </Group>
                    <Text fz={18} fw={300} noMargin pt={3}>
                        {address}
                    </Text>
                </>
            )}
            {update && (
                <Stack spacing='none'>
                    <Text fz={18} fw={400} noMargin>
                        Required*
                    </Text>
                    <Group position='apart' mt={24}>
                        <NativeSelect
                            label='Country/region'
                            data={['United States', 'Canada']}
                            rightSection={<ChevronDown />}
                            rightSectionWidth={40}
                            mt={20}
                        />
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
                    <TextInput label='Street address' w={369} required mt={40} />
                    <TextInput label='Apt/suite (optional)' w={369} mt={40} />
                    <Group mt={40}>
                        <TextInput label='City' required w={369} />
                        <TextInput label='State/region/county' required style={{ flex: 1 }} />
                    </Group>
                    <InputMask mask='99999' maskChar={null}>
                        {(inputProps) => <TextInput {...inputProps} label='Zip code' w={369} required mt={40} />}
                    </InputMask>
                    <Button size='lg' mt={40} mb={124} w={140}>
                        Save
                    </Button>
                </Stack>
            )}
        </>
    );
};

export { AddressComponent };
