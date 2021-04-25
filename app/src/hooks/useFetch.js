import { useState, useEffect } from 'react';

export default function useFetch(url, args = {}, params = {}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    function parseQueryParams(params = {}) {
        if (Object.keys(params).length <= 0) {
            return "";
        }

        // Parse { key: value } to `key=value` strings
        params = Object
            .entries(params)
            .map(([key, val]) => `${key}=${val}`)
            .join("&");

        return `?${params}`; // Parse to URI query parameters
    }

    useEffect(() => {
        (async () => {
            try {
                if (!url) throw new Error(`Invalid URL argument, got \`${url}\``);
                const response = await fetch(`${url}${parseQueryParams(params)}`, args);
                const data     = await response.json();
                setData(data);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, args, params]);

    return { loading, data, error, success: !Boolean(error) };
}
