import { PillComponent } from '@/components';
import { useState } from 'react';

const useSortHeader = () => {
    const [filters, setFilters] = useState([]);

    const filterClick = (filterEvent) => {
        const value = filterEvent.target.value;
        const checked = filterEvent.target.checked;
        if (checked) {
            // @ts-ignore
            setFilters((prevFilters) => [...prevFilters, value]);
        } else {
            setFilters((prevFilters) => prevFilters.filter((item) => item !== value));
        }
    };
    const filterPills = filters.map((item, index) => <PillComponent title={item} key={index} />);

    return {
        filterPills,
        filterClick,
    };
};

export default useSortHeader;
