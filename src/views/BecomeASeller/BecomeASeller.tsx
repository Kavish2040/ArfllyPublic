import { Text } from '@/components';
import {
    Anchor,
    Box,
    Button,
    Center,
    Container,
    Grid,
    Group,
    rem,
    Stack,
    Title,
    useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowNarrowRight, CircleCheck } from 'tabler-icons-react';
import { BecomeASellerConfirmModal, BecomeASellerModal } from './components';
import useBecomeASeller from './useBecomeASeller';

const exampleImages = [
    {
      url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 0.5
    },
    {
      url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 0.8
    },
    {
      url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 1.2
    },
    {
      url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 0.7
    },
    {
      url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 1.0
    },
    {
      url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      depth: 0.6
    },
];

const BecomeASeller = () => {
    const theme = useMantineTheme();
    const { becomeASeller, becomeASellerConfirm, becomeASellerHandlers, becomeASellerConfirmHandlers } =
        useBecomeASeller();
    const [parallax, setParallax] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const x = (clientX - window.innerWidth / 2) / 20;
            const y = (clientY - window.innerHeight / 2) / 20;
            setParallax({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const imageStyles: React.CSSProperties = {
        position: 'absolute',
        willChange: 'transform',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out forwards',
        transition: 'transform 0.3s ease-out',
    };

    return (
        <Container fluid p={0}>
             <style>
                {`
                    @keyframes fadeIn {
                        to {
                            opacity: 1;
                        }
                    }
                `}
            </style>
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        color: theme.white,
                    }}
                >
                    <Title
                        order={1}
                        sx={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: rem(72),
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        Become a Seller
                    </Title>
                    <Text mt="xl" mx="auto" maw={600}>
                        With our user-friendly interface, and dedicated support team, selling on our platform has
                        never been easier. Join our community of talented artists and galleries today and start
                        turning your passion into profit!
                    </Text>
                    <Button
                        variant="outline"
                        radius="xl"
                        size="lg"
                        sx={{
                            marginTop: theme.spacing.xl,
                            borderColor: theme.white,
                            color: theme.white,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                        onClick={() => becomeASellerHandlers.setTrue()}
                    >
                        Get started
                    </Button>
                    <Text
                        sx={{
                            marginTop: theme.spacing.lg,
                            color: theme.colors.gray[5],
                            '& a': {
                                color: theme.white,
                                textDecoration: 'underline',
                                '&:hover': {
                                    textDecoration: 'none',
                                },
                            },
                        }}
                    >
                        Already a Seller?{' '}
                        <Anchor href="https://black-island-01b0d1a10.4.azurestaticapps.net/" target="_blank" inherit>
                             Click here to Log In.
                        </Anchor>
                    </Text>
                </Box>
                <Image src={exampleImages[0].url} alt="art piece 1" width={150} height={200} style={{ ...imageStyles, top: '5%', left: '10%', animationDelay: '0.1s', transform: `translate(${parallax.x * exampleImages[0].depth}px, ${parallax.y * exampleImages[0].depth}px)` }}/>
                <Image src={exampleImages[1].url} alt="art piece 2" width={200} height={150} style={{ ...imageStyles, top: '10%', right: '8%', animationDelay: '0.2s', transform: `translate(${parallax.x * exampleImages[1].depth}px, ${parallax.y * exampleImages[1].depth}px)` }}/>
                <Image src={exampleImages[2].url} alt="art piece 3" width={180} height={220} style={{ ...imageStyles, bottom: '10%', left: '5%', animationDelay: '0.3s', transform: `translate(${parallax.x * exampleImages[2].depth}px, ${parallax.y * exampleImages[2].depth}px)` }}/>
                <Image src={exampleImages[3].url} alt="art piece 4" width={160} height={160} style={{ ...imageStyles, bottom: '15%', right: '5%', animationDelay: '0.4s', transform: `translate(${parallax.x * exampleImages[3].depth}px, ${parallax.y * exampleImages[3].depth}px)` }}/>
                <Image src={exampleImages[4].url} alt="art piece 5" width={120} height={180} style={{ ...imageStyles, top: '50%', left: '25%', animationDelay: '0.5s', transform: `translate(${parallax.x * exampleImages[4].depth}px, ${parallax.y * exampleImages[4].depth}px)` }}/>
                <Image src={exampleImages[5].url} alt="art piece 6" width={220} height={160} style={{ ...imageStyles, top: '40%', right: '15%', animationDelay: '0.6s', transform: `translate(${parallax.x * exampleImages[5].depth}px, ${parallax.y * exampleImages[5].depth}px)` }}/>
            </Box>
            <Container size='xl'>
                <Grid my={100}>
                    <Grid.Col xs={6}>
                        <Title pb={40}>Benefits</Title>
                        <Image src='/benefitsPicture.png' width={536} height={536} alt='benefits' />
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <Stack pt={98.5}>
                            <Group>
                                <CircleCheck width={40} height={40} />
                                <Text fz={18} fw={600} noMargin>
                                    Increase your exposure
                                </Text>
                            </Group>
                            <Text fz={18} fw={300} pl={57} noMargin>
                                Our platform provides you with a massive online audience to showcase and sell your
                                artwork. With our user-friendly interface and powerful search engine optimization, we
                                make it easy for art enthusiasts to find and purchase your work.
                            </Text>
                            <Group pt={25}>
                                <CircleCheck width={40} height={40} />
                                <Text fz={18} fw={600} noMargin>
                                    Increase your revenue
                                </Text>
                            </Group>
                            <Text fz={18} fw={300} pl={57} noMargin>
                                Our marketplace is designed to help you generate more revenue for your artwork. We offer
                                competitive commission rates, so you can focus on creating beautiful pieces while we
                                take care of the rest.
                            </Text>
                            <Group pt={25}>
                                <CircleCheck width={40} height={40} />
                                <Text fz={18} fw={600} noMargin>
                                    Join the community
                                </Text>
                            </Group>
                            <Text fz={18} fw={300} pl={57} noMargin>
                                Being a part of our platform means being a part of a vibrant and supportive community of
                                artists and galleries. Connect with fellow creatives, share your work, and receive
                                feedback.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Container size='xl'>
                    <Grid py={100}>
                        <Grid.Col xs={5}>
                            <Title maw={300}>Hear from our community</Title>
                            <Text fz={18} noMargin pt={40}>
                                &quot;The exposure I have received has been incredible, and I have made more sales than
                                I ever thought possible. I highly recommend this platform to any artist or gallery to
                                expand their reach and generate more revenue.&quot;
                            </Text>
                            <Group pt={60}>
                                <Image
                                    src='/reviewPicture.png'
                                    width={72}
                                    height={72}
                                    alt='Picture for review section'
                                />
                                <Stack spacing='xs'>
                                    <Text noMargin fz={18}>
                                        Artist first name
                                    </Text>
                                    <Text c={theme.other.colors.secondaryText} noMargin fz={18}>
                                        Location
                                    </Text>
                                </Stack>
                            </Group>
                        </Grid.Col>
                        <Grid.Col xs={7}>
                            <Image
                                src='/reviewSectionLargePicture.png'
                                width={760}
                                height={420}
                                alt='Picture of art for review section'
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid my={100} columns={100} gutter='none' h={500}>
                        <Grid.Col
                            xs={36}
                            sx={{
                                background: 'linear-gradient(180deg, #0C0C0C 0%, #272626 100%)',
                                borderTopLeftRadius: '8px',
                                borderBottomLeftRadius: '8px',
                            }}
                        >
                            <Center>
                                <Stack w='75%' spacing='none'>
                                    <Title c='white' pt={129}>
                                        Become a seller
                                    </Title>
                                    <Text c='white' fz={18} fw={300}>
                                        Join our community of talented artists and galleries today and start turning
                                        your passion into profit!
                                    </Text>
                                    <Button
                                        variant='default'
                                        rightIcon={<ArrowNarrowRight />}
                                        radius='xl'
                                        size='lg'
                                        w={172}
                                        mt={32}
                                        onClick={() => becomeASellerHandlers.setTrue()}
                                    >
                                        Get started
                                    </Button>
                                </Stack>
                            </Center>
                        </Grid.Col>
                        <Grid.Col xs={64}>
                            <Image src='/becomeASeller.png' alt='become a seller image' width={823} height={500} />
                        </Grid.Col>
                    </Grid>
                    <BecomeASellerModal
                        opened={becomeASeller}
                        close={() => becomeASellerHandlers.setFalse()}
                        openModal={() => becomeASellerConfirmHandlers.setTrue()}
                    />
                    <BecomeASellerConfirmModal
                        opened={becomeASellerConfirm}
                        close={() => becomeASellerConfirmHandlers.setFalse()}
                        closeModal={() => becomeASellerConfirmHandlers.setFalse()}
                    />
                </Container>
            </Container>
        </Container>
    );
};

export { BecomeASeller };
