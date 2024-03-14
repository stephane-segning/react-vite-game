import {useUserPin} from "../hooks/user-pin.hook.ts";

export function DisplayComponent() {
    // Get the user pin from the hook
    const [pin] = useUserPin();
    return (
        <div>
            {pin && (
                <pre>
                    {pin}
                </pre>
            )}
        </div>
    );
}