import { Text } from '@/components';
import { PaymentComponent } from '@/views/Account/components';
import { Anchor, Container, Divider, Group, Stack, Title, useMantineTheme } from '@mantine/core';

const Payments = () => {
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
                            Payments
                        </Anchor>
                    </Group>
                    <Title order={3} mt={16}>
                        Payments
                    </Title>
                    <Divider mt={48} />
                    <PaymentComponent />
                </Stack>
            </Container>
        </Container>
    );
};

export { Payments };
