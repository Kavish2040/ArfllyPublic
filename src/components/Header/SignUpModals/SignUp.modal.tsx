import { Text } from '@/components';
import { Anchor, Button, Checkbox, Divider, List, Modal, PasswordInput, TextInput } from '@mantine/core';
import useHeaderComponent from '../useHeader.component';

type Props = {
    opened: boolean;
    close: () => void;
    openModal: () => void;
    openLogin: () => void;
};

const SignUpModal = ({ opened, close, openModal, openLogin }: Props) => {
    const { error, password, confirmPassword, handlePasswordChange, handleConfirmChange, confirmError } =
        useHeaderComponent();

    const handleLogin = () => {
        close();
        openLogin();
    };

    return (
        <Modal title='Sign up' opened={opened} onClose={close} padding='xl' size='lg' zIndex={2000}>
            <Divider mb={16} />
            <Text fz={18} fw={400} noMargin>
                Required*
            </Text>
            <TextInput label='Email' required mt={24} />
            <PasswordInput
                label='Password'
                placeholder='********'
                value={password}
                onChange={handlePasswordChange}
                error={error}
                required
                mt={40}
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
            />
            <Checkbox
                label={
                    <>
                        I agree to artflly&apos;s{' '}
                        <Anchor td='underline' c='black'>
                            Terms of Service
                        </Anchor>{' '}
                        and{' '}
                        <Anchor td='underline' c='black'>
                            Privacy Policy
                        </Anchor>
                    </>
                }
                my={40}
                styles={{ label: { fontWeight: 400 } }}
            />
            <Button size='lg' radius='xl' fullWidth onClick={() => openModal()}>
                Sign up
            </Button>
            <Divider my={24} />
            <Text noMargin ta='center'>
                Already have an account?{' '}
                <Anchor span inherit td='underline' fw={700} c='black' onClick={() => handleLogin()}>
                    Log in
                </Anchor>
            </Text>
        </Modal>
    );
};

/*
<Divider my={24} />
            <Button
                size='lg'
                radius='xl'
                variant='outline'
                fullWidth
                leftIcon={<Image src='/googleG.png' width={32} alt='Google G' />}
            >
                Continue with Google
            </Button>
            <Button
                size='lg'
                radius='xl'
                variant='outline'
                fullWidth
                leftIcon={<Image src='/facebookF.png' width={32} alt='Facebook F' />}
                mt={16}
            >
                Continue with Facebook
            </Button>
*/

export { SignUpModal };
