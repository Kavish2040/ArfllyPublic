import { IconArtboard, IconCashBanknote, IconHeart, IconMessages, IconShieldLock, IconUser } from '@tabler/icons-react';

export const accountCard = [
    {
        icon: <IconUser size={48} />,
        title: 'Personal Info',
        description: 'Provide your personal details and how we can reach you',
        path: '/account/personalinfo',
    },
    {
        icon: <IconShieldLock size={48} />,
        title: 'Login',
        description: 'Update your login and password',
        path: '/account/loginandsecurity',
    },
    {
        icon: <IconCashBanknote size={48} />,
        title: 'Payments',
        description: 'Review your payment details',
        path: '/account/payments',
    },
    {
        icon: <IconMessages size={48} />,
        title: 'Purchase Requests',
        description: 'Review your open purchase requests',
        path: '/purchaseRequest',
    },
    {
        icon: <IconArtboard size={48} />,
        title: 'Transactions',
        description: 'View your recent transactions',
        path: '/account/transactions',
    },
    {
        icon: <IconHeart size={48} />,
        title: 'Discover',
        description: 'Personalized recommendations based on what you like',
        path: '/discover',
    },
];
