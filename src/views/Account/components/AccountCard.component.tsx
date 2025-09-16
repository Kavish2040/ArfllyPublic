import { Text } from '@/components';
import { Paper, useMantineTheme } from '@mantine/core';
import React from 'react';
import useAccount from '../useAccount';

type Props = {
    description: string;
    icon: React.ReactNode;
    title: string;
    path: any;
};

const AccountCardComponent = ({ description, icon, path, title }: Props) => {
    const theme = useMantineTheme();
    const { accountCardRouting } = useAccount();

    return (
        <Paper
            p={24}
            style={{ border: `1px solid ${theme.other.colors.beige}`, cursor: 'pointer' }}
            onClick={() => accountCardRouting(path)}
        >
            {icon}
            <Text fw={500} noMargin pt={25}>
                {title}
            </Text>
            <Text fz={14} fw={300} noMargin pt={12}>
                {description}
            </Text>
        </Paper>
    );
};

export { AccountCardComponent };
