import { Text } from '@/components';
import { Button, Divider, Group, Modal, Stack, Textarea, TextInput } from '@mantine/core';

type Props = {
    opened: any;
    close: any;
    openModal: any;
    closeModal: any;
};

const ContactSupportModal = ({ opened, close, openModal, closeModal }: Props) => {
    return (
        <Modal opened={opened} onClose={close} padding={32} withCloseButton={false} size='lg'>
            <Group position='apart'>
                <Text noMargin fz={24} fw={400}>
                    Contact support
                </Text>
                <Group>
                    <Button
                        variant='outline'
                        size='lg'
                        w={103}
                        radius='xl'
                        onClick={() => closeModal('contactSupport')}
                    >
                        Cancel
                    </Button>
                    <Button size='lg' radius='xl' w={103} onClick={() => openModal('contactSupportSent')}>
                        Send
                    </Button>
                </Group>
            </Group>
            <Divider mt={32} mb={16} />
            <Stack spacing='xl'>
                <Text noMargin fz={18} fw={400}>
                    Required*
                </Text>
                <TextInput label='Support issue' required />
                <Textarea label='Description' required />
            </Stack>
        </Modal>
    );
};

export { ContactSupportModal };
