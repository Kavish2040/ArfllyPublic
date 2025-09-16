import { Text } from '@/components';
import { Anchor, Container, Group, Stack, TextInput, Title } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const HeroComponent = () => {
    return (
        <Container size='xl'>
            <Group my={88} position='apart'>
                <Stack>
                    <Group spacing='xs'>
                        <Anchor href='/' color='black' fz={14} fw={400}>
                            Account
                        </Anchor>
                        <Text fz={14} fw={400} noMargin>
                            &gt;
                        </Text>
                        <Anchor href='helpcenter' color='black' fz={14} fw={400}>
                            Help center
                        </Anchor>
                    </Group>
                    <Title order={3}>Help center</Title>
                </Stack>
                <TextInput
                    radius='xl'
                    size='md'
                    styles={(theme) => ({
                        input: {
                            border: '1px solid #D1C9BF',
                            paddingLeft: '14px',
                            borderRadius: '32px',
                            backgroundColor: 'transparent',
                        },
                        placeholder: { fontSize: '18px', color: theme.other.colors.secondaryText },
                        rightSection: {
                            backgroundColor: 'black',
                            borderTopRightRadius: '32px',
                            borderBottomRightRadius: '32px',
                            width: '70px',
                        },
                        wrapper: {
                            width: '479px',
                        },
                    })}
                    placeholder='What do you need help with today?'
                    rightSection={<Search color='white' height={20} width={20} />}
                />
            </Group>
        </Container>
    );
};

export { HeroComponent };
