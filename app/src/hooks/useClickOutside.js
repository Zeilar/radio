import { useEffect, useRef } from 'react';

export default function useClickOut(callback, event = "mousedown") {
    const ref = useRef();

    useEffect(() => {
        function clickHandler(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
        document.addEventListener(event, clickHandler);
        return () => {
            document.removeEventListener(event, clickHandler);
        }
    }, [callback, event]);

    return ref;
}
