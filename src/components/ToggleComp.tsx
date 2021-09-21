import { ReactElement } from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleComp(): ReactElement{
    const [value, setValue] = useToggle(false)

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    
        const button: HTMLButtonElement = event.currentTarget;
        return setValue
    };


    return(
        <div>
            <div>{value?.toString()}</div>
            <button name={'1'} onClick={buttonHandler}>Toggle</button>
            <button name={'2'} onClick={buttonHandler}>Make True</button>
            <button name={'3'} onClick={buttonHandler}>Make False</button>
        </div>
        )
}