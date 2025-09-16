import { useRouter } from 'next/router';
import { useState } from 'react';

const usePurchaseRequest = () => {
    const router = useRouter();
    const [edit, setEdit] = useState(false);
    const [sameShipping, setSameShipping] = useState(true);
    const [paymentType, setPaymentType] = useState({});

    const handleRouteToSent = (paymentType) => {
        router.push(`/purchaserequest/sent?paymentType=${paymentType}`);
    };

    return {
        edit,
        setEdit,
        sameShipping,
        setSameShipping,
        paymentType,
        setPaymentType,
        handleRouteToSent,
    };
};

export default usePurchaseRequest;
