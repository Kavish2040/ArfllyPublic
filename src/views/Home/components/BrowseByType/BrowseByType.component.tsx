import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { ArrowNarrowRight } from 'tabler-icons-react';

// --- Data for the image accordion ---
const accordionItems = [
    {
        id: 1,
        title: 'Drawing',
        imageUrl: '/drawingTypeImage.png',
        comingSoon: false,
    },
    {
        id: 2,
        title: 'Painting',
        imageUrl: '/paintingTypeImage.png',
        comingSoon: false,
    },
    {
        id: 3,
        title: 'Photography',
        imageUrl: '/photographyTypeImage.png',
        comingSoon: false,
    },
    {
        id: 4,
        title: 'Sculpture',
        imageUrl: '/sculptureTypeImage.png',
        comingSoon: true,
    },
    {
        id: 5,
        title: '3D Object',
        imageUrl: '/3dobjectTypeImage.png',
        comingSoon: true,
    },
    {
        id: 6,
        title: 'Print',
        imageUrl: '/printTypeImage.png',
        comingSoon: false,
    },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
    const itemStyle: React.CSSProperties = {
        position: 'relative',
        height: '450px',
        borderRadius: '1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'width 700ms ease-in-out',
        width: isActive ? '400px' : '60px',
    };

    const imageStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    };

    const comingSoonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: '#F5F5DC', // beige
        color: '#1B1A1A', // offBlack
        padding: '0.5rem 1rem',
        zIndex: 1,
        fontWeight: 700,
        fontSize: '14px',
    };

    const titleStyle: React.CSSProperties = {
        position: 'absolute',
        color: 'white',
        fontSize: '1.125rem',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        transition: 'all 300ms ease-in-out',
        bottom: isActive ? '1.5rem' : '6rem',
        left: '50%',
        transform: isActive ? 'translateX(-50%) rotate(0deg)' : 'translateX(-50%) rotate(90deg)',
        width: 'auto',
        textAlign: 'left',
    };

    return (
        <div style={itemStyle} onMouseEnter={onMouseEnter}>
            {item.comingSoon && <div style={comingSoonStyle}>COMING SOON</div>}
            <img src={item.imageUrl} alt={item.title} style={imageStyle} />
            <div style={overlayStyle}></div>
            <span style={titleStyle}>{item.title}</span>
        </div>
    );
};

// --- Main App Component ---
export function BrowseByTypeComponent({ onExploreClick }: { onExploreClick?: () => void }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    const sectionStyle: React.CSSProperties = {
        fontFamily: 'sans-serif',
        width: '100%',
        padding: '3rem 0',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
    };

    const textContainerStyle: React.CSSProperties = {
        flex: 1,
        textAlign: 'left',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#111827',
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
        fontFamily: 'Playfair Display, serif',
    };

    const paragraphStyle: React.CSSProperties = {
        marginTop: '1.5rem',
        fontSize: '1.125rem',
        color: '#4B5563',
        maxWidth: '36rem',
    };

    const buttonContainerStyle: React.CSSProperties = {
        marginTop: '2rem',
    };

    const accordionSectionStyle: React.CSSProperties = {
        flex: 1.5,
    };

    const accordionContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        overflowX: 'auto',
        padding: '1rem',
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={textContainerStyle}>
                    <h1 style={headingStyle}>Explore Art by Your Favorite Medium</h1>
                    <p style={paragraphStyle}>
                        Discover artworks of any style. Explore a curated selection of drawings, paintings, photography, and more from talented artists around the globe.
                    </p>
                    <div style={buttonContainerStyle}>
                        <Button
                            onClick={onExploreClick}
                            variant='default'
                            rightIcon={<ArrowNarrowRight />}
                            radius='xl'
                            size='lg'
                        >
                            Explore more
                        </Button>
                    </div>
                </div>
                <div style={accordionSectionStyle}>
                    <div style={accordionContainerStyle}>
                        {accordionItems.map((item, index) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isActive={index === activeIndex}
                                onMouseEnter={() => handleItemHover(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
