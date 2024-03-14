import {PropsWithChildren, useMemo, useState} from "react";
import {shareContext, ShareContextData} from "./data-share.context.ts";

export function ShareProvider({children}: PropsWithChildren) {
    const [data, updateData] = useState<ShareContextData>({});
    const setData = useMemo(() => async (nD: ShareContextData) => updateData(nD), []);

    return (
        <shareContext.Provider value={{setData, data}}>
            {children}
        </shareContext.Provider>
    );
}

