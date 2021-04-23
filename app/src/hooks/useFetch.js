import { useState, useEffect } from 'react';

export default function useFetch(url, args) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(200);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                if (!url) {
                    throw "Invalid URL parameter";
                }
                const response = await fetch(url, args);
                setStatus(response.status);
                const data = await response.json();
                setData(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, args]);

    return { loading, data, status, error };
}
