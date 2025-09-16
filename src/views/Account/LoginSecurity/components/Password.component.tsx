import { Text } from '@/components';
import useHeaderComponent from '@/components/Header/useHeader.component';
import useAccount from '@/views/Account/useAccount';
import { Button, Group, List, PasswordInput, Stack, useMantineTheme } from '@mantine/core';
import useLoginSecurity from '../useLoginSecurity';

const PasswordComponent = () => {
    const theme = useMantineTheme();
    const { update, setUpdate } = useLoginSecurity();
    const { password, handlePasswordChange, error, confirmPassword, confirmError, handleConfirmChange } =
        useHeaderComponent();
    const { personalInfoSave } = useAccount();

    return (
        <>
            {!update && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            Password
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
                        ************
                    </Text>
                </>
            )}
            {update && (
                <Stack spacing='none'>
                    <Group position='apart' mt={24}>
                        <Text noMargin fz={18} fw={400}>
                            Required*
                        </Text>
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
                    <PasswordInput label='Password' placeholder='********' required mt={40} w='55%' />
                    <PasswordInput
                        label='New Password'
                        placeholder='********'
                        value={password}
                        onChange={handlePasswordChange}
                        error={error}
                        required
                        mt={40}
                        w='55%'
                    />
                    <List fz={14} fw={300} ml={15} mt={12}>
                        <List.Item>Must be at least 8 characters long</List.Item>
                        <List.Item>Must contain at least one number</List.Item>
                        <List.Item>Must include at least one special character, such as !@#$%^&*()</List.Item>
                    </List>
                    <PasswordInput
                        label='Confirm Password'
                        placeholder='********'
                        value={confirmPassword}
                        onChange={handleConfirmChange}
                        error={confirmError}
                        required
                        mt={40}
                        w='55%'
                    />
                    <Button size='lg' mt={40} w={140} onClick={() => personalInfoSave('password')}>
                        Save
                    </Button>
                </Stack>
            )}
        </>
    );
};

export { PasswordComponent };
