import {useCallback, useContext} from "react";
import {shareContext} from "./data-share.context.ts";

export function useViewShare() {
    const {data} = useContext(shareContext);
    return data;
}

export function useWriteShare() {
    const {setData} = useContext(shareContext);
    return setData;
}

export function useShare<T>(key: string): [T, (v: T) => void, () => void] {
    // Use the context to get the data and the setData function
    const {data, setData} = useContext(shareContext);

    // Create a function to set the item in the data
    const setItem = useCallback((value: T) => {
        // Set the item in the data
        setData({
            ...data,
            [key]: value
        });
    }, [data, key, setData]);

    // Create a function to remove the item from the data
    const remove = useCallback(() => {
        // Remove the item from the data
        delete data[key];

        // Set the data
        setData(data);
    }, [data, key, setData])

    // Return the data, the setItem function, and the remove function
    return [data[key] as T, setItem, remove];
}
