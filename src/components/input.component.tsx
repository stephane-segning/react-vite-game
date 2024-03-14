import {ChangeEvent, useCallback} from "react";
import {useUserPin} from "../hooks/user-pin.hook.ts";

export function InputComponent() {
    // Get the `setPin` function from the hook
    const [, setPin] = useUserPin();

    // The `useCallback` hook is used to memoize the `onChange` function.
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPin(event.target.value)
    }, [setPin]);

    return (
        <div>
            <label className='input-label'>
                <span>Type something</span>
                <input name='apple' onChange={onChange}/>
            </label>
        </div>
    );
}