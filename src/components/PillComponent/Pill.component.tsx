import { Badge } from '@mantine/core';

type props = {
    title?: any;
    marginRight?: string;
};

const PillComponent = ({ title, marginRight }: props) => {
    return (
        <Badge
            variant='outline'
            h={40}
            c='black'
            fz={14}
            fw={400}
            maw='120px'
            style={{ textTransform: 'capitalize' }}
            mr={marginRight}
        >
            {title}
        </Badge>
    );
};

export { PillComponent };
