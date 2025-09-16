import { Text } from '@/components';
import { Anchor, Container, Divider, Group, Stack } from '@mantine/core';
import Image from 'next/image';

type Props = {
    transactionImage: string;
    status: string;
    artworkName: string;
    artworkPrice: number;
    artworkArtistName: string;
    artworkPurchaseDate: string;
    artworkTransactionURL: string;
};

const TransactionsCardComponent = ({
    transactionImage,
    status,
    artworkName,
    artworkPrice,
    artworkArtistName,
    artworkPurchaseDate,
    artworkTransactionURL,
}: Props) => {
    return (
        <Container fluid p={0} mt={30}>
            <Group h='100%' w='100%'>
                <Image src={transactionImage} alt='Image of Art for this transaction' width={250} height={250} />
                <Stack align='stretch' h={250} spacing='none' sx={{ flex: 1 }}>
                    <Group position='apart' w='100%'>
                        <Text noMargin fz={18} fw={500}>
                            {status}
                        </Text>
                        <Anchor td='underline' c='black' href={artworkTransactionURL}>
                            View
                        </Anchor>
                    </Group>
                    <Text fz={18} fw={300} noMargin py={12}>
                        {artworkName}
                    </Text>
                    <Text noMargin fz={18} fw={300}>
                        ${artworkPrice} &middot; {artworkArtistName}
                    </Text>
                    <Text noMargin fz={18} fw={300} style={{ marginTop: 'auto' }}>
                        {artworkPurchaseDate}
                    </Text>
                </Stack>
            </Group>
            <Divider mt={30} />
        </Container>
    );
};

export { TransactionsCardComponent };
