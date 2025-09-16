import { Text } from '@/components';
import { Badge, Card, Group, Image, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';

type Art = {
    name: string;
    fullSizeImageUrl: string;
    height: number;
    width: number;
    depth: number;
    artId: number;
};

type ArtItem = {
    art: Art;
    price: number;
};

type ArtCard = {
    item: ArtItem;
};

const ArtCardComponent = ({ item }: ArtCard) => {
    const router = useRouter();
    const theme = useMantineTheme();
    const sold = false;
    const { art, price } = item;
    const { name, height, width, depth, fullSizeImageUrl, artId } = art;
    return (
        <Card
            shadow='none'
            sx={{ backgroundColor: '#FAFAFA' }}
            p={0}
            className='clickable'
            onClick={() => {
                router.push(`/artwork/${artId}`);
            }}
        >
            <Card.Section>
                {sold && (
                    <Badge
                        variant='outline'
                        h={40}
                        c='black'
                        fz={14}
                        fw={400}
                        maw='120px'
                        style={{ textTransform: 'capitalize', zIndex: 1000 }}
                        mt={30}
                        ml={30}
                        pos='absolute'
                        bg={theme.other.colors.beige}
                    >
                        SOLD
                    </Badge>
                )}
                <Image src={fullSizeImageUrl} alt={name} height={375} fit='contain' />
            </Card.Section>
            <Group position='apart' mt={16}>
                <Text fz={18} fw={400} noMargin>
                    {name}
                </Text>
                <Text fz={18} fw={400} noMargin pt={6}>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(price)}
                </Text>
            </Group>
            <Text fz={14} fw={400} noMargin pb={32}>
                {width} x {height} x {depth}
            </Text>
        </Card>
    );
};

export { ArtCardComponent };
