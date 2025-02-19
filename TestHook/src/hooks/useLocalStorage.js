import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
       const saveItem = localStorage.getItem(key);
         return saveItem ? JSON.parse(saveItem) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [value, setValue];
};

export default useLocalStorage;
