import {createContext} from "react";

export type ShareContextData = Record<string, any>;

interface DataShareHook {
    data: ShareContextData
    setData: (newData: ShareContextData) => void
}

const fakeData: DataShareHook = {
    data: {},
    setData: () => {},
}

export const shareContext = createContext<DataShareHook>(fakeData);