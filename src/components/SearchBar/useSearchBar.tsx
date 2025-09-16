import { useDisclosure } from '@mantine/hooks';

const useSearchBar = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return {
        opened,
        toggle,
    };
};

export default useSearchBar;
