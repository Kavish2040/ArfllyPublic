import { Text } from '@/components';
import { Button, Container, Grid, Title } from '@mantine/core';
import useSubmitRequest from '../SubmitRequest/useSubmitRequest';

const FAQsComponent = () => {
    const { contactSupportClick } = useSubmitRequest();
    return (
        <Container size='xl'>
            <Title order={3} my={45}>
                FAQs
            </Title>
            <Grid>
                <Grid.Col sm={6}>
                    <Text fz={18}>What are your shipping methods and how long does it take?</Text>
                    <Text fz={18}>Can I cancel/edit my order?</Text>
                    <Text fz={18}>Does my artwork come with a frame?</Text>
                    <Text fz={18}>How can I sell on artflly?</Text>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Text fz={18}>What are your shipping methods and how long does it take?</Text>
                    <Text fz={18}>Can I cancel/edit my order?</Text>
                    <Text fz={18}>Does my artwork come with a frame?</Text>
                    <Text fz={18}>How can I sell on artflly?</Text>
                </Grid.Col>
            </Grid>
            <Title order={3} mt={100}>
                Need assistance?
            </Title>
            <Text fz={18} fw={300}>
                Need more help? Send us a message and we&apos;ll get back to you ASAP.
            </Text>
            <Button
                variant='filled'
                size='lg'
                radius='xl'
                w='25%'
                mb={50}
                styles={{ label: { fontSize: '14px', fontWeight: 300 } }}
                onClick={() => contactSupportClick()}
            >
                Contact support
            </Button>
        </Container>
    );
};

export { FAQsComponent };
