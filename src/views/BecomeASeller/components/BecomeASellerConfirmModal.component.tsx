import { Text } from '@/components';
import { Button, Modal, Stack } from '@mantine/core';
import Image from 'next/image';

type Props = {
    opened: boolean;
    close: any;
    closeModal: any;
};

const BecomeASellerConfirmModal = ({ opened, close, closeModal }: Props) => {
    return (
        <Modal opened={opened} onClose={close} size='lg' padding='xl' withCloseButton={false}>
            <Stack spacing='none' align='center' my={30}>
                <Image src='/emailIcon.png' width={100} height={100} alt='Email Icon' />
                <Text fz={24} fw={400} ta='center' w='60%'>
                    Your seller&apos;s application has been sent
                </Text>
                <Text fz={14} fw={300} noMargin ta='center'>
                    We&apos;ll review your application and get back to you ASAP.
                </Text>
                <Text fz={14} fw={300} noMargin ta='center' w='45%'>
                    We&apos;ll email you at <Text span>johndoe@gmail.com</Text> once completed.
                </Text>
                <Button size='lg' w={103} mt={40} onClick={() => closeModal('becomeASellerConfirm')}>
                    Ok
                </Button>
            </Stack>
        </Modal>
    );
};

export { BecomeASellerConfirmModal };
