import { ArtCardComponent } from '@/components';
import { Carousel } from '@mantine/carousel';
import { Button, Grid, Group, Title } from '@mantine/core';
import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from 'tabler-icons-react';

type Props = {
    title?: string;
    viewButton: boolean;
    art: any;
};

const ArtCarousel = ({ title, viewButton, art }: Props) => {
    return (
        <>
            <Group position='apart'>
                <Title order={3}>{title}</Title>
                {viewButton && (
                    <Button variant='link'>
                        View all <ChevronRight />
                    </Button>
                )}
            </Group>
            {art && art.length > 0 ? (
                <Carousel
                    mt={52}
                    align='start'
                    slideGap='md'
                    slideSize='5%'
                    dragFree
                    previousControlIcon={<ArrowNarrowLeft />}
                    nextControlIcon={<ArrowNarrowRight />}
                    styles={{
                        control: {
                            height: '45px',
                            width: '72px',
                            '&[data-inactive]': {
                                opacity: 0,
                                cursor: 'default',
                            },
                        },
                    }}
                >
                    <Grid>
                        {art.map((item, index) => (
                            <Grid.Col sm={4} key={index}>
                                <ArtCardComponent item={item} />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Carousel>
            ) : (
                <></>
            )}
        </>
    );
};

export { ArtCarousel };
