import { useRef, useEffect } from "react";


interface Options {
    enabled?: boolean;
    target?: GlobalEventHandlers;
}

export default function useEventListenerPom(eventType: string, handler: (e: Event) => void, {enabled = true, target = document}: Options = {}) {
    const handleRef = useRef(handler)

    useEffect(() => {
        handleRef.current = handler
    })

    useEffect(() => {
        if(!enabled)
            return
        const internalHandler = (e: Event) => {
            return handleRef.current(e)
        }
        target.addEventListener(eventType, internalHandler)
        return () => {
            target.removeEventListener(eventType, internalHandler)
        }
    }, [eventType, enabled, target])


}