import { useState } from 'react';

const useLoginSecurity = () => {
    const [active, setActive] = useState(false);
    const [update, setUpdate] = useState(false);

    return {
        active,
        setActive,
        update,
        setUpdate,
    };
};

export default useLoginSecurity;
