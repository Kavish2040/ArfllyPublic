import { Text } from '@/components';
import { Button, Group, Stack, TextInput, useMantineTheme } from '@mantine/core';
import { IconCircle2Filled, IconCircleCheckFilled } from '@tabler/icons-react';
import usePurchaseRequest from '../../usePurchaseRequest';

const EmailSection = () => {
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
                                Email
                            </Text>
                            <Text fz={18} fw={300} pt={5} noMargin>
                                {'email placeholder'}
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
            {edit && (
                <Group align='flex-start' position='left' noWrap>
                    <IconCircle2Filled size={32} style={{ color: theme.other.colors.main }} />
                    <TextInput label='Email' w='100%' maw={488} />
                </Group>
            )}
        </>
    );
};

export { EmailSection };
