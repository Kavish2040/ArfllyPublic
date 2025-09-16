import { Text } from '@/components';
import { Button, Group, Stack, TextInput, useMantineTheme } from '@mantine/core';
import InputMask from 'react-input-mask';
import useAccount from '../../useAccount';

type Props = {
    phoneNumber: any;
};

const PhoneComponent = ({ phoneNumber }: Props) => {
    const theme = useMantineTheme();
    const { update, setUpdate, personalInfoSave } = useAccount();

    return (
        <>
            {!update && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            Phone number
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
                        {phoneNumber}
                    </Text>
                </>
            )}
            {update && (
                <Stack spacing='none'>
                    <Group position='apart' mt={24}>
                        <InputMask mask='(999) 999 - 9999' maskChar={null}>
                            {(inputProps) => <TextInput {...inputProps} label='Phone number' w={369} />}
                        </InputMask>
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
                    <Button size='lg' mt={40} w={140} onClick={() => personalInfoSave('phone number')}>
                        Save
                    </Button>
                </Stack>
            )}
        </>
    );
};

export { PhoneComponent };
