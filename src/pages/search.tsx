import { Search } from '@/views';

const Page = (props: any) => <Search {...props} />;

export const getServerSideProps = async () => {
    return {
        props: {
            title: 'Search',
        },
    };
};

export default Page;
