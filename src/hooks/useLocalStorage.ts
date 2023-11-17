import { useState, useEffect } from "react";

function getStorageValue<Type>(key: string, defaultValue: Type) {
    // getting stored value
    const saved = localStorage.getItem(key);
    if( saved === null ) return defaultValue;
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = <Type,>(key: string, defaultValue: Type) => {
    const [value, setValue] = useState(() => {
        return getStorageValue<Type>(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};