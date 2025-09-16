import { useBoolean } from '@/lib/hooks/useBoolean';

const useBecomeASeller = () => {
    const [becomeASeller, becomeASellerHandlers] = useBoolean(false);
    const [becomeASellerConfirm, becomeASellerConfirmHandlers] = useBoolean(false);

    return {
        becomeASeller,
        becomeASellerConfirm,
        becomeASellerHandlers,
        becomeASellerConfirmHandlers,
    };
};

export default useBecomeASeller;
