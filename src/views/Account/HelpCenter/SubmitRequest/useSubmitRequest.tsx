import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';

const useSubmitRequest = () => {
    const [opened, { open, close }] = useDisclosure();
    const router = useRouter();

    const contactSupportClick = () => {
        router.push('/account/helpcenter/submitrequest');
    };

    return {
        opened,
        open,
        close,
        contactSupportClick,
    };
};

export default useSubmitRequest;
