import { Grid, Paper, Stack } from '@mantine/core';
import { ArrowNarrowRight } from 'tabler-icons-react';
import { Text } from '../../../components/Text';

type PRProps = {
    price: string;
    text: string;
};

const PriceRangeComponent = ({ price, text }: PRProps) => {
    return (
        <Paper radius={0}>
            <Grid mx={32} mt={25} mb={18} gutter='none'>
                <Grid.Col span={6}>
                    <Stack spacing='none'>
                        <Text fz={18} fw={500} my={0}>
                            {text}
                        </Text>
                        <Text fz={32} fw={500} mt={12} my={0}>
                            {price}
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={6} ta='right' pt={18}>
                    <ArrowNarrowRight width={32} height={32} />
                </Grid.Col>
            </Grid>
        </Paper>
    );
};

export { PriceRangeComponent };
