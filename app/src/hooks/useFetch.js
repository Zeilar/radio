import { useState, useEffect } from 'react';

export default function useFetch(url, args) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                if (!url) {
                    throw "Invalid URL parameter";
                }
                const response = await fetch(url, args);
                const data = await response.json();
                setData(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, args]);

    return { loading, data, error, success: !error };
}
