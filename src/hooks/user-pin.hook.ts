import {useShare} from "./share-data";

const userPinHookKey = 'user-pin';

export function useUserPin() {
    // This is a custom hook that uses the useShare hook to share the user pin
    return useShare<string>(userPinHookKey);
}