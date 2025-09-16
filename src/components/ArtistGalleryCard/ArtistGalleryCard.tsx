import { Text } from '@/components';
import { Box, Image, Paper, Stack } from '@mantine/core';

type Props = {
    picture: string;
    location?: string;
    name: string;
};

const ArtistGalleryCard = ({ picture, location, name }: Props) => {
    return (
        <Paper sx={{ backgroundColor: '#FAFAFA' }} className='clickable'>
            <Stack align='center' spacing='none'>
                <Box mt={62}>
                    <Image
                        radius={999}
                        src={picture}
                        alt='Profile Picture'
                        width={250}
                        height={250}
                        fit='contain'
                        withPlaceholder={true}
                    />
                </Box>
                <Text noMargin fz={18} fw={400} ta='center' pt={78}>
                    {name}
                </Text>
                <Text noMargin fz={14} fw={400} ta='center' pt={8}>
                    {location}
                </Text>
            </Stack>
        </Paper>
    );
};

export { ArtistGalleryCard };
