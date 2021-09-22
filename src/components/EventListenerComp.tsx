import { useState} from "react";
import useEventListenerPom from "../hooks/useEventListener";

export default function EventListenerComp() {
    const[enabled, setEnabled] = useState(true)
    const[count, setCount] = useState(0)

    useEventListenerPom(
        'click',
        () => {},
        {enabled}
    )

    useEventListenerPom(
        'scroll',
        () => {
            console.log('They se me SCROLLIN\'')
        },
        {target: window}
    )


    return(
        <div style={{height: '110vh'}}>
            <h1>useEventListener Hook</h1>
            <button onClick={() => setEnabled((e) => !e)}>
                Enabled: {String(enabled)}
            </button>
            <br />
            <button onClick={() => setCount((c) => c+1)}>Counts: {count}</button>
        </div>
    )
}