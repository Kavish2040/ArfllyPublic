import { Text } from '@/components';
import { Button, Checkbox, Divider, Modal, Radio, TextInput } from '@mantine/core';

type Props = {
    opened: boolean;
    close: any;
    openModal: any;
};

const BecomeASellerModal = ({ opened, close, openModal }: Props) => {
    return (
        <Modal title='Become a seller' opened={opened} size='lg' padding='xl' onClose={close}>
            <Divider />
            <Text fz={18} fw={300}>
                Fill out the form below and we&apos;ll be in touch to get your seller&apos;s account started.
            </Text>
            <Text fz={18} fw={400} noMargin>
                Required*
            </Text>
            <form>
                <Radio.Group label='Account Type' withAsterisk mt={32}>
                    <Radio value='gallery' label='Gallery' mt={24} />
                    <Radio value='individual' label='Individual artist' mt={24} />
                </Radio.Group>
                <Radio.Group label='Do you have a retail location?' withAsterisk mt={40}>
                    <Radio value='yes' label='Yes' mt={24} />
                    <Radio value='no' label='No' mt={24} />
                </Radio.Group>
                <TextInput placeholder='John' label='First name' required mt={40} />
                <TextInput placeholder='Doe' label='Last name' required mt={40} />
                <TextInput placeholder='Johndoe@gmail.com' label='Email' required mt={40} />
                <TextInput placeholder='555-555-5555' label='Phone number' required mt={40} />
                <TextInput
                    label='Portfolio URL'
                    description='Please provide a link to view your work'
                    required
                    mt={40}
                />
                <Checkbox label="I'd like to receive marketing communications" mt={40} />
                <Button size='lg' fullWidth type='submit' mt={40} onClick={openModal}>
                    Send
                </Button>
            </form>
        </Modal>
    );
};

export { BecomeASellerModal };
