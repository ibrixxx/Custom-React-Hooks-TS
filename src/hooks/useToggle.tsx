import { useState } from "react";

export default function useToggle(defaultValue : boolean) {
    const[value, setValue] = useState(defaultValue)

    const toggleValue = (val: boolean) => {
        setValue(currentValue => 
            typeof val === "boolean" ? val : !currentValue
        )
    }

    return [value, toggleValue]
}