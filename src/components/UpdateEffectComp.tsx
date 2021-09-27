import { useState, useEffect } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

export default function UpdateEffectComp() {
    const [count, setConut] = useState(10)

    useUpdateEffect(() => alert(count), [count])

    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={() => setConut(c => c+1)}>Increment</button>
        </div>
    )
}