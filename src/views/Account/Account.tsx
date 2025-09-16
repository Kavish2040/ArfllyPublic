import { accountCard } from '@/constants/accountCard';
import { Container, Grid, Title, useMantineTheme } from '@mantine/core';
import { AccountCardComponent } from './components';

const Account = () => {
    const theme = useMantineTheme();

    return (
        <Container size='xl' fluid px={60} bg={theme.other.colors.footerFont}>
            <Title order={3} pt={60} mb={40}>
                Account
            </Title>
            <Grid mb={100}>
                {accountCard.map((item) => (
                    <Grid.Col sm={4} key={item.title}>
                        <AccountCardComponent
                            description={item.description}
                            icon={item.icon}
                            title={item.title}
                            path={item.path}
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

export { Account };
