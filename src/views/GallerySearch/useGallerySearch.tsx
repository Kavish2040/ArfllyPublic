import { useGlobalState } from '@/store';
import { createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles(() => ({
    slideContent: {
        width: '0',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
    },
    slideContentOpen: {
        width: '35%',
    },
}));

const useGallerySearch = () => {
    const { classes, cx } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const { getSearchResults, getSearchText } = useGlobalState();

    return {
        classes,
        cx,
        opened,
        toggle,
        getSearchResults,
        getSearchText,
    };
};

export default useGallerySearch;
