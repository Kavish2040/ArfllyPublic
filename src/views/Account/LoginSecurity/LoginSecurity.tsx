import { Text } from '@/components';
import { Anchor, Button, Container, Divider, Group, Popover, Stack, Title, useMantineTheme } from '@mantine/core';
import { PasswordComponent } from './components';

const LoginSecurity = () => {
    const theme = useMantineTheme();
    return (
        <Container bg={theme.other.colors.footerFont} fluid>
            <Container size='sm' pb={116}>
                <Stack>
                    <Group spacing='xs' mt={60}>
                        <Anchor href='/' color='black' fz={14} fw={400}>
                            Account
                        </Anchor>
                        <Text fz={14} fw={400} noMargin>
                            &gt;
                        </Text>
                        <Anchor href='helpcenter' color='black' fz={14} fw={400}>
                            Login & Security
                        </Anchor>
                    </Group>
                    <Title order={3}>Login</Title>
                </Stack>
                <Divider mt={47} />
                <Group position='apart' mt={24}>
                    <Text fz={18} fw={400} noMargin>
                        Email
                    </Text>
                    <Popover width={282} position='right'>
                        <Popover.Target>
                            <Button
                                component='a'
                                variant='subtle'
                                color={theme.other.colors.offBlack}
                                td='underline'
                                fz={18}
                                p={0}
                            >
                                Update
                            </Button>
                        </Popover.Target>
                        <Popover.Dropdown p={16}>
                            <Text noMargin fz={14} fw={300}>
                                Please email{' '}
                                <Anchor td='underline' color='black' href='mailto:help@artflly.com'>
                                    help@artflly.com
                                </Anchor>{' '}
                                if you&apos;d like to update your email.
                            </Text>
                        </Popover.Dropdown>
                    </Popover>
                </Group>
                <Text fz={18} fw={300} noMargin pt={3}>
                    {'user email placeholder'}
                </Text>
                <Divider mt={24} />
                <PasswordComponent />
            </Container>
        </Container>
    );
};

export { LoginSecurity };
