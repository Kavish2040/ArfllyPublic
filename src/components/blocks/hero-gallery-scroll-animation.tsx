'use client';

import {
    HTMLMotionProps,
    MotionValue,
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';
import * as React from 'react';

type BentoGridVariant = 'default' | 'threeCells' | 'fourCells';

const getBentoGridStyles = (
    variant: BentoGridVariant = 'default'
): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
        position: 'relative',
        display: 'grid',
        gap: '1rem',
    };

    switch (variant) {
        case 'default':
            return {
                ...baseStyles,
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridTemplateRows: '1fr 0.5fr 0.5fr 1fr',
            };
        case 'threeCells':
            return {
                ...baseStyles,
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
            };
        case 'fourCells':
            return {
                ...baseStyles,
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
            };
        default:
            return baseStyles;
    }
};

interface ContainerScrollContextValue {
    scrollYProgress: MotionValue<number>;
}
const ContainerScrollContext = React.createContext<
    ContainerScrollContextValue | undefined
>(undefined);
function useContainerScrollContext() {
    const context = React.useContext(ContainerScrollContext);
    if (!context) {
        throw new Error(
            'useContainerScrollContext must be used within a ContainerScroll Component'
        );
    }
    return context;
}
const ContainerScroll = ({
    children,
    style,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });
    return (
        <ContainerScrollContext.Provider value={{ scrollYProgress }}>
            <div
                ref={scrollRef}
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    width: '100%',
                    ...style,
                }}
                {...props}
            >
                {children}
            </div>
        </ContainerScrollContext.Provider>
    );
};

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: BentoGridVariant;
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
    ({ variant = 'default', style, children, ...props }, ref) => {
        const gridStyles = getBentoGridStyles(variant);

        return (
            <div
                ref={ref}
                style={{
                    ...gridStyles,
                    ...style,
                }}
                {...props}
            >
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        let cellStyle: React.CSSProperties = {};

                        if (variant === 'default') {
                            switch (index) {
                                case 0:
                                    cellStyle = {
                                        gridColumn: 'span 6',
                                        gridRow: 'span 3',
                                        transformOrigin: 'top right',
                                    };
                                    break;
                                case 1:
                                    cellStyle = {
                                        gridColumn: 'span 2',
                                        gridRow: 'span 2',
                                    };
                                    break;
                                case 2:
                                    cellStyle = {
                                        gridColumn: 'span 2',
                                        gridRow: 'span 2',
                                        transformOrigin: 'bottom right',
                                    };
                                    break;
                                case 3:
                                    cellStyle = {
                                        gridColumn: 'span 3',
                                        transformOrigin: 'top right',
                                    };
                                    break;
                                case 4:
                                    cellStyle = { gridColumn: 'span 3' };
                                    break;
                            }
                        } else if (variant === 'threeCells') {
                            switch (index) {
                                case 0:
                                    cellStyle = { gridColumn: 'span 2' };
                                    break;
                            }
                        } else if (variant === 'fourCells') {
                            switch (index) {
                                case 0:
                                    cellStyle = { gridColumn: '1', gridRow: '1' };
                                    break;
                                case 1:
                                    cellStyle = {
                                        gridColumn: '2',
                                        gridRow: '1',
                                        marginLeft: '60px',
                                    };
                                    break;
                                case 2:
                                    cellStyle = { gridColumn: '1', gridRow: '2' };
                                    break;
                                case 3:
                                    cellStyle = {
                                        gridColumn: '2',
                                        gridRow: '2',
                                        marginLeft: '60px',
                                    };
                                    break;
                            }
                        }

                        return React.cloneElement(
                            child as React.ReactElement<any>,
                            {
                                style: {
                                    ...cellStyle,
                                    ...(child.props as any)?.style,
                                },
                            }
                        );
                    }
                    return child;
                })}
            </div>
        );
    }
);
BentoGrid.displayName = 'BentoGrid';

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    ({ style, ...props }, ref) => {
        const { scrollYProgress } = useContainerScrollContext();
        const translate = useTransform(scrollYProgress, [0.1, 0.9], [
            '-35%',
            '0%',
        ]);
        const scale = useTransform(scrollYProgress, [0, 0.9], [0.5, 1]);

        return (
            <motion.div
                ref={ref}
                style={{ translate, scale, ...style }}
                {...props}
            />
        );
    }
);
BentoCell.displayName = 'BentoCell';

const ContainerScale = React.forwardRef<
    HTMLDivElement,
    HTMLMotionProps<'div'>
>(({ style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 0.6 ? 'absolute' : 'fixed'
    );
    return (
        <motion.div
            ref={ref}
            style={{
                left: '50%',
                top: '50%',
                translate: '-50% -50%',
                scale,
                position,
                opacity,
                ...style,
            }}
            {...props}
        />
    );
});
ContainerScale.displayName = 'ContainerScale';
export { ContainerScroll, BentoGrid, BentoCell, ContainerScale };
