import {
    BentoCell,
    BentoGrid,
    ContainerScale,
    ContainerScroll,
} from '@/components/blocks/hero-gallery-scroll-animation';
import Image from 'next/image';
import { RainbowButton } from '../ui/RainbowButton';

const ARTWORK_IMAGES = [
    '/Hokusai_Great-Wave.avif',
    '/premium_photo-1664272436668-78437b92929e.jpeg',
    'https://images.unsplash.com/photo-1578321272176-b7bbc0679853',
    'https://images.unsplash.com/photo-1549490349-8643362247b5',
    '/pexels-steve-1787242.jpg',
];

interface AnimatedHeroProps {
    onExploreClick?: () => void;
}

const AnimatedHero = ({ onExploreClick }: AnimatedHeroProps) => {
    return (
        <ContainerScroll style={{ height: '300vh', backgroundColor: 'white' }}>
            <BentoGrid
                variant='default'
                style={{
                    position: 'sticky',
                    left: '0',
                    top: '0',
                    zIndex: 0,
                    height: '100vh',
                    width: '100%',
                    padding: '1rem',
                }}
            >
                {ARTWORK_IMAGES.map((imageUrl, index) => (
                    <BentoCell
                        key={index}
                        style={{
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <Image
                            src={imageUrl}
                            alt=''
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </BentoCell>
                ))}
            </BentoGrid>

            <ContainerScale
                style={{
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Playfair Display, serif',
                        maxWidth: '900px',
                        fontSize: '4rem',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        color: '#1B1A1A',
                        margin: '0 auto',
                        marginTop: '40px',
                        lineHeight: 1.2,
                    }}
                >
                    Bringing the art
                    <br />
                    gallery to your home
                </h1>
                <p
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        margin: '1.5rem auto',
                        maxWidth: '700px',
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        color: '#555555',
                        lineHeight: 1.5,
                    }}
                >
                    Discover exceptional artworks from talented artists and galleries worldwide
                </p>
                <RainbowButton onClick={onExploreClick}>
                    Explore artworks
                </RainbowButton>
            </ContainerScale>
        </ContainerScroll>
    );
};

export { AnimatedHero };
