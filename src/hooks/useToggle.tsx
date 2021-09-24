import { useState } from "react";

export default function useToggle(defaultValue : boolean) {
    const[value, setValue] = useState(defaultValue)

    const toggleValue = (val: boolean | Function) => {
        setValue(e => 
            typeof(val) === 'boolean'?  val : !e 
        )
    }

    return [value, toggleValue] as const
}