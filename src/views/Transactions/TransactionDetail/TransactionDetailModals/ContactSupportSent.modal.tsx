import { Text } from '@/components';
import { Button, Center, Modal, Stack } from '@mantine/core';
import Image from 'next/image';

type Props = {
    opened: boolean;
    close: any;
    closeModal: any;
};

const ContactSupportSent = ({ opened, close, closeModal }: Props) => {
    return (
        <Modal opened={opened} onClose={close} withCloseButton={false} size='lg'>
            <Center my={69}>
                <Stack w='60%'>
                    <Center>
                        <Image src='/emailIcon.png' width={100} height={100} alt='Email Icon' />
                    </Center>
                    <Text ta='center' fz={24} noMargin>
                        Your message has been sent
                    </Text>
                    <Text ta='center' fw={300} noMargin>
                        We&apos;ll review your message and send you an update and email you at <b>placeholder</b> once
                        completed.
                    </Text>
                    <Center>
                        <Button
                            variant='filled'
                            size='lg'
                            radius='lg'
                            mt={35}
                            px={40}
                            styles={{ label: { fontSize: '18px', fontWeight: 300 } }}
                            onClick={() => closeModal('contactSupportSent')}
                        >
                            Ok
                        </Button>
                    </Center>
                </Stack>
            </Center>
        </Modal>
    );
};

export { ContactSupportSent };
