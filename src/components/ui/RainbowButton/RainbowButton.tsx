import React from 'react';
import styles from './RainbowButton.module.css';

interface RainbowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
    children,
    className,
    ...props
}: RainbowButtonProps) {
    return (
        <button className={`${styles.rainbowButton} ${className || ''}`} {...props}>
            {children}
        </button>
    );
}
