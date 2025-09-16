import { Text as MantineText, TextProps } from '@mantine/core';
import React from 'react';

type TProps = TextProps & {
    center?: boolean;
    children?: React.ReactNode;
    className?: string;
    inline?: boolean;
    italic?: boolean;
    noMargin?: boolean;
    span?: boolean;
    bold?: boolean;
    testId?: string;
    under?: boolean;
    upper?: boolean;
};

const Text = (props: TProps) => {
    const {
        center,
        children,
        className = '',
        inline,
        italic,
        noMargin,
        span,
        testId = '',
        under,
        upper,
        bold,
        ...rest
    } = props;

    return (
        <MantineText
            component={span ? 'span' : 'p'}
            className={className}
            data-testid={testId}
            fs={italic ? 'italic' : undefined}
            fw={bold ? '600' : '400'}
            my={noMargin ? 0 : 20}
            size='sm'
            sx={inline ? { display: 'inline' } : undefined}
            ta={center ? 'center' : undefined}
            tabIndex={0}
            td={under ? 'underline' : undefined}
            tt={upper ? 'uppercase' : undefined}
            {...rest}
        >
            {children}
        </MantineText>
    );
};

export { Text };
