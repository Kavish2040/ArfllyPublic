import { Container } from '@mantine/core';
import { FAQsComponent, HeroComponent, QuickActionsComponent } from './components';

const HelpCenter = () => {
    return (
        <Container fluid p={0}>
            <HeroComponent />
            <QuickActionsComponent />
            <FAQsComponent />
        </Container>
    );
};

export { HelpCenter };
