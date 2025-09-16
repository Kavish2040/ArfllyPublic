import { Text } from '@/components';
import { Anchor, Button, Container, Grid, Group, NativeSelect, Textarea, TextInput, Title } from '@mantine/core';
import { ChevronDown, Mail, Phone } from 'tabler-icons-react';
import useSubmitRequest from '../SubmitRequest/useSubmitRequest';
import { SubmitModalComponent } from './Modal/SubmitModal.component';

const SubmitRequest = () => {
    const { opened, open, close } = useSubmitRequest();
    return (
        <Container size='lg' p={0}>
            <Grid mt={70} mb={137}>
                <Grid.Col sm={6}>
                    <Group spacing='xs'>
                        <Anchor href='/' color='black' fz={14} fw={400}>
                            Account
                        </Anchor>
                        <Text fz={14} fw={400} noMargin>
                            &gt;
                        </Text>
                        <Anchor href='/account/helpcenter' color='black' fz={14} fw={400}>
                            Help center
                        </Anchor>
                        <Text fz={14} fw={400} noMargin>
                            &gt;
                        </Text>
                        <Anchor href='/account/helpcenter/submitrequest' color='black' fz={14} fw={400}>
                            Submit request
                        </Anchor>
                    </Group>
                    <Title order={3} mt={16}>
                        Need assistance?
                    </Title>
                    <Text fz={18} fw={300} w='75%'>
                        We&apos;re happy to help! Just fill out the form below and we&apos;ll be in touch in under 24
                        hours.
                    </Text>
                    <Group spacing='none' mt={40} mb={20}>
                        <Mail />
                        <Button
                            component='a'
                            variant='link'
                            href='mailto:support@artflly.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            styles={{ label: { fontSize: '14px', fontWeight: 300 } }}
                        >
                            Support@artflly.com
                        </Button>
                    </Group>
                    <Group spacing='none'>
                        <Phone />
                        <Button
                            component='a'
                            variant='link'
                            href='tel:+15555555555'
                            target='_blank'
                            rel='noopener noreferrer'
                            styles={{ label: { fontSize: '14px', fontWeight: 300 } }}
                        >
                            555-555-5555
                        </Button>
                    </Group>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Text fz={18} noMargin>
                        Required*
                    </Text>
                    <TextInput
                        label='First name'
                        placeholder='John'
                        required
                        mt={24}
                        styles={{ wrapper: { paddingTop: '10px' } }}
                    />
                    <TextInput
                        label='Last name'
                        placeholder='Doe'
                        required
                        mt={24}
                        styles={{ wrapper: { paddingTop: '10px' } }}
                    />
                    <TextInput
                        label='Email'
                        placeholder='johndoe@gmail.com'
                        required
                        mt={24}
                        styles={{ wrapper: { paddingTop: '10px' } }}
                    />
                    <TextInput
                        label='Phone'
                        placeholder='555-555-5555'
                        required
                        mt={24}
                        styles={{ wrapper: { paddingTop: '10px' } }}
                    />
                    <NativeSelect
                        label='Request type'
                        data={[
                            { value: 'other', label: 'Make Selection' },
                            { value: 'notResponding', label: 'Seller not responding' },
                            { value: 'delivery', label: 'Delivery' },
                            { value: 'purchase', label: 'Purchase' },
                            { value: 'other', label: 'Other' },
                        ]}
                        rightSection={<ChevronDown />}
                        rightSectionWidth={40}
                        withAsterisk
                        mt={24}
                        styles={{ wrapper: { paddingTop: '10px' }, rightSection: { paddingTop: '10px' } }}
                    />
                    <Textarea
                        label='Description'
                        withAsterisk
                        mt={24}
                        minRows={5}
                        styles={{ wrapper: { paddingTop: '10px' }, rightSection: { paddingTop: '10px' } }}
                    />
                    <Button
                        variant='filled'
                        size='lg'
                        radius='lg'
                        mt={68}
                        styles={{ label: { fontSize: '18px', fontWeight: 300 } }}
                        onClick={open}
                    >
                        Submit
                    </Button>
                </Grid.Col>
            </Grid>
            <SubmitModalComponent opened={opened} close={close} />
        </Container>
    );
};

export { SubmitRequest };
