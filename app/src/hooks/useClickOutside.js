import { useEffect, useRef } from 'react';

export default function useClickOutside(callback, condition = true, event = "mousedown") {
    const ref = useRef();

    useEffect(() => {
        function clickHandler(e) {
            if (ref.current && condition && !ref.current.contains(e.target)) {
                callback();
            }
        }
        document.addEventListener(event, clickHandler);
        return () => {
            document.removeEventListener(event, clickHandler);
        }
    }, [callback, event, condition]);

    return ref;
}
