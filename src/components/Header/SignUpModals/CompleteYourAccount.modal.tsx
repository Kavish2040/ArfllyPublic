import { Button, Divider, Modal, TextInput } from '@mantine/core';
import InputMask from 'react-input-mask';

type Props = {
    openModal: any;
    close: any;
    opened: any;
    firstName: string;
    setFirstName: (value: string) => void;
};

const CompleteYourAccountModal = ({ openModal, close, opened, firstName, setFirstName }: Props) => {
    return (
        <Modal title='Complete your account' opened={opened} onClose={close} padding='xl' size='lg'>
            <Divider mb={16} />
            <TextInput label='First name' mt={24} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <TextInput label='Last name' mt={24} />
            <InputMask mask='(999) 999 - 9999' maskChar={null}>
                {(inputProps) => <TextInput {...inputProps} label='Phone number' mt={24} />}
            </InputMask>
            <Button size='lg' radius='xl' fullWidth mt={40} onClick={() => openModal()}>
                Next
            </Button>
            <Button
                size='lg'
                radius='xl'
                variant='outline'
                fullWidth
                mt={16}
                onClick={() => openModal('welcomeToArtfllyModal')}
            >
                Skip
            </Button>
        </Modal>
    );
};

export { CompleteYourAccountModal };
