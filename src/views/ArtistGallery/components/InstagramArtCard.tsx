import { Text } from '@/components';
import { Card, Group, Image, Stack, useMantineTheme } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';

type Props = {
    name: string;
    handle: string;
    art: string;
};

const InstagramArtCard = ({ name, handle, art }: Props) => {
    const theme = useMantineTheme();

    return (
        <Card shadow='none' radius='none' withBorder>
            <Card.Section p={16}>
                <Group position='apart'>
                    <Stack spacing='none'>
                        <Text noMargin fz={18} fw={400}>
                            {name}
                        </Text>
                        <Text noMargin fz={12} fw={400} c={theme.other.colors.secondaryText}>
                            {handle}
                        </Text>
                    </Stack>
                    <IconBrandInstagram size={24} />
                </Group>
            </Card.Section>
            <Card.Section>
                <Image src={art} alt='Artwork from Instagram' />
            </Card.Section>
        </Card>
    );
};

export { InstagramArtCard };
