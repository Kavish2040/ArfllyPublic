import { Text } from '@/components';
import { Anchor, Container, Divider, Group, Stack, Title, useMantineTheme } from '@mantine/core';
import { AddressComponent, NameComponent, PhoneComponent } from './components/PersonalInfoComponents';

const PersonalInfo = () => {
    const theme = useMantineTheme();

    return (
        <Container fluid p={0} bg={theme.other.colors.footerFont}>
            <Container size='sm' mb={124}>
                <Stack spacing='none'>
                    <Group spacing='xs' mt={60}>
                        <Anchor href='/account' color='black' fz={14} fw={400}>
                            Account
                        </Anchor>
                        <Text fz={14} fw={400} noMargin>
                            &gt;
                        </Text>
                        <Anchor href='personalinfo' color='black' fz={14} fw={400}>
                            Personal info
                        </Anchor>
                    </Group>
                    <Title order={3} mt={16}>
                        Personal info
                    </Title>
                    <Divider mt={48} />
                    <NameComponent name={'First name'} firstOrLastName={'first name placeholder'} />
                    <Divider mt={24} />
                    <NameComponent name={'Last name'} firstOrLastName={'last name placeholder'} />
                    <Divider mt={24} />
                    <PhoneComponent phoneNumber={'phone number placeholder'} />
                    <Divider mt={24} />
                    <AddressComponent address={'address placeholder'} />
                </Stack>
            </Container>
        </Container>
    );
};

export { PersonalInfo };
