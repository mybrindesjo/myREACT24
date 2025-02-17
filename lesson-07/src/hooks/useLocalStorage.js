import { useState } from 'react';

export const useLocalStorage = () => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(test);
        return storedValue ? JSON.parse(storedValue) : 'initaial value';

    });

    console.log(value);
    
    return [value, setValue];

    }