import { useEffect, useRef } from 'react';

export default function useClickOut(callback) {
    const ref = useRef();

    useEffect(() => {
        function clickHandler(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
        document.addEventListener("mouseup", clickHandler);
        return () => {
            document.removeEventListener("mouseup", clickHandler);
        }
    }, [callback]);

    return ref;
}
