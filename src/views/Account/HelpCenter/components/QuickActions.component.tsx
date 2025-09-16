import { Text } from '@/components';
import { Button, Center, Container, Grid, Paper, Stack, Title, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { ArrowNarrowRight } from 'tabler-icons-react';

const QuickActionsComponent = () => {
    const theme = useMantineTheme();

    return (
        <Container fluid bg={theme.other.colors.footerFont}>
            <Container size='xl'>
                <Grid>
                    <Grid.Col sm={6}>
                        <Title order={3} my={60}>
                            Quick actions
                        </Title>
                        <Paper mb={60} sx={{ boxShadow: '0px 8px 13px 0px rgba(22, 21, 21, 0.13)' }}>
                            <Center>
                                <Stack py={32}>
                                    <Center>
                                        <Image src='/infoIcon.png' width={100} height={100} alt='Info Icon' />
                                    </Center>
                                    <Text fz={24} fw={400} ta='center' noMargin>
                                        Seller resources
                                    </Text>
                                    <Center>
                                        <Text fz={14} fw={300} ta='center' w='70%' noMargin>
                                            Check out our resources to help make listing your art simple
                                        </Text>
                                    </Center>
                                    <Button variant='unstyled' ta='center' color='black'>
                                        See more&nbsp;
                                        <ArrowNarrowRight />
                                    </Button>
                                </Stack>
                            </Center>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
};

export { QuickActionsComponent };
