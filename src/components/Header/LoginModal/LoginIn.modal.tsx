import { Text } from '@/components';
import { ARTFLLY_LOGIN_PLAYFAB } from '@/constants/apiRoutes';
import useRest from '@/lib/hooks/useRest';
import { useGlobalState } from '@/store/globalState';
import { Anchor, Button, Divider, Modal, PasswordInput, TextInput } from '@mantine/core';
import { PlayFab, PlayFabClient } from 'playfab-sdk';
import { useState } from 'react';

type Props = {
    opened: boolean;
    close: () => void;
    closeModal: () => void;
    showSignUp: () => void;
};

const LogInModal = ({ opened, close, closeModal, showSignUp }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthUser, showNotification } = useGlobalState();
    const { restPost } = useRest();

    const handleLogin = async () => {
        PlayFab.settings.titleId = 'E4789';
        PlayFabClient.LoginWithEmailAddress(
            {
                TitleId: 'E4789',
                Email: email,
                Password: password,
            },
            async (error, result) => {
                if (result !== null) {
                    // go to api and get a token
                    // post Buyer/Auth/Playfab - sessionTicket, playfabId, entityToken, entityId
                    const values = {
                        sessionTicket: result.data.SessionTicket,
                        playfabId: result.data.PlayFabId,
                        entityToken: result.data.EntityToken?.EntityToken,
                        entityId: result.data.EntityToken?.Entity?.Id,
                    };
                    const { status, data } = await restPost(ARTFLLY_LOGIN_PLAYFAB, values);
                    if (status === 200 && data) {
                        setAuthUser(data);
                    }
                } else if (error !== null) {
                    showNotification('Invalid username/password combination.');
                }
            }
        );
        closeModal();
    };

    const handleSignup = () => {
        closeModal();
        showSignUp();
    };

    return (
        <Modal title='Login or Create Account' opened={opened} onClose={close} padding='xl' size='lg' zIndex={2000}>
            <Divider mb={16} />
            <Text ta='center'>
                To access all features of Artflly, including following artists and galleries,
                <br />
                create a FREE account or log in.
            </Text>
            <Divider mb={16} />
            <TextInput label='Email' required mt={24} onChange={(event) => setEmail(event.currentTarget.value)} />
            <PasswordInput
                label='Password'
                placeholder='********'
                required
                mt={40}
                onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Button size='lg' radius='xl' fullWidth mt={40} onClick={() => handleLogin()}>
                Continue
            </Button>
            <Divider my={24} />
            <Text noMargin ta='center'>
                Don&apos;t have an account?{' '}
                <Anchor span inherit td='underline' fw={700} c='black' onClick={() => handleSignup()}>
                    Sign up
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
export { LogInModal };
