import { useEffect, useRef } from 'react';

export default function useClickOutside(callback, args = {}) {
    const ref = useRef();

    useEffect(() => {
        const event = args.event ?? "mousedown";
        function clickHandler(e) {
            if (ref.current && args.condition && !ref.current.contains(e.target)) {
                callback();
            }
        }
        document.addEventListener(event, clickHandler);
        return () => {
            document.removeEventListener(event, clickHandler);
        }
    }, [callback, args.condition, args.event]);

    return ref;
}
