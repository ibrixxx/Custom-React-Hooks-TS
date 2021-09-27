import { MutableRefObject, useEffect, useRef } from "react";

export default function useUpdateEffect(callback: Function, dependencies: [number| string| boolean| null] ) {
    const firstRenderRef: MutableRefObject<boolean>  = useRef(true)
    
    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies)
}