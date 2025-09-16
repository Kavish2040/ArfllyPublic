import * as React from 'react';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const getButtonStyles = (
    variant: ButtonVariant = 'default',
    size: ButtonSize = 'default'
): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'colors 0.2s',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
    };

    // Size styles
    let sizeStyles: React.CSSProperties = {};
    switch (size) {
        case 'sm':
            sizeStyles = {
                height: '36px',
                padding: '0 12px',
                borderRadius: '6px',
            };
            break;
        case 'lg':
            sizeStyles = {
                height: '44px',
                padding: '0 32px',
                borderRadius: '6px',
            };
            break;
        case 'icon':
            sizeStyles = { height: '40px', width: '40px', padding: '0' };
            break;
        default:
            sizeStyles = { height: '40px', padding: '0 16px' };
    }

    // Variant styles
    let variantStyles: React.CSSProperties = {};
    switch (variant) {
        case 'destructive':
            variantStyles = { backgroundColor: '#ef4444', color: 'white' };
            break;
        case 'outline':
            variantStyles = {
                border: '1px solid #d1d5db',
                backgroundColor: 'white',
                color: '#374151',
            };
            break;
        case 'secondary':
            variantStyles = { backgroundColor: '#f3f4f6', color: '#374151' };
            break;
        case 'ghost':
            variantStyles = {
                backgroundColor: 'transparent',
                color: '#374151',
            };
            break;
        case 'link':
            variantStyles = {
                backgroundColor: 'transparent',
                color: '#000',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
            };
            break;
        default:
            variantStyles = { backgroundColor: '#000', color: 'white' };
    }

    return { ...baseStyles, ...sizeStyles, ...variantStyles };
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'default', size = 'default', style, onMouseEnter, onMouseLeave, ...props }, ref) => {
        const [isHovered, setIsHovered] = React.useState(false);

        const buttonStyles = getButtonStyles(variant, size);

        // Hover styles
        let hoverStyles: React.CSSProperties = {};
        if (isHovered) {
            switch (variant) {
                case 'destructive':
                    hoverStyles = { backgroundColor: '#dc2626' };
                    break;
                case 'outline':
                    hoverStyles = {
                        backgroundColor: '#f9fafb',
                        color: '#111827',
                    };
                    break;
                case 'secondary':
                    hoverStyles = { backgroundColor: '#e5e7eb' };
                    break;
                case 'ghost':
                    hoverStyles = {
                        backgroundColor: '#f3f4f6',
                        color: '#111827',
                    };
                    break;
                case 'link':
                    hoverStyles = { textDecoration: 'underline' };
                    break;
                default:
                    hoverStyles = { backgroundColor: '#1f2937' };
            }
        }

        return (
            <button
                ref={ref}
                style={{ ...buttonStyles, ...hoverStyles, ...style }}
                onMouseEnter={(e) => {
                    setIsHovered(true);
                    onMouseEnter?.(e);
                }}
                onMouseLeave={(e) => {
                    setIsHovered(false);
                    onMouseLeave?.(e);
                }}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
