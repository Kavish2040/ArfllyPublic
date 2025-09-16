import { Text } from '@/components';
import { Box, Button, Center, Modal, Title, useMantineTheme } from '@mantine/core';

type Props = {
    openModal: () => void;
    close: () => void;
    opened: boolean;
    firstLetter: string;
    firstName: string;
};

const WelcomeToArtfllyModal = ({ openModal, close, opened, firstLetter, firstName }: Props) => {
    const theme = useMantineTheme();

    return (
        <Modal
            title='Complete your account'
            opened={opened}
            onClose={close}
            padding='xl'
            size='lg'
            withCloseButton={false}
        >
            <Center>
                <Box
                    sx={{ backgroundColor: theme.other.colors.main, borderRadius: '999px' }}
                    mt={24}
                    h='100px'
                    w='100px'
                >
                    <Center h='100%'>
                        <Title color='white' order={1}>
                            {firstLetter}
                        </Title>
                    </Center>
                </Box>
            </Center>
            <Text noMargin fz={24} fw={400} ta='center' pt={40}>
                Welcome to artflly
            </Text>
            <Text noMargin fz={24} fw={400} ta='center'>
                {firstName}!
            </Text>
            <Text noMargin fz={18} fw={300} ta='center' pt={16}>
                Complete your profile so you can find artwork that interests you.
            </Text>
            <Button size='lg' radius='xl' fullWidth mt={40} onClick={() => openModal()}>
                Continue
            </Button>
            <Button size='lg' radius='xl' variant='outline' fullWidth mt={16} onClick={close}>
                Skip for now
            </Button>
        </Modal>
    );
};

export { WelcomeToArtfllyModal };
