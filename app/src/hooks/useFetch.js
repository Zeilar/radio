import { useState, useEffect } from 'react';

export default function useFetch(url, args = {}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    function parseQueryParams(params = {}) {
        if (Object.keys(params).length <= 0) {
            return "";
        }

        // Parse { key: value } to `key=value` strings
        params = Object
            .entries(params)
            .map(([key, val]) => `${key}=${val}`)
            .join("&");

        return `?${params}`;
    }

    useEffect(() => {
        (async () => {
            try {
                if (!url) throw new Error(`Invalid URL argument, got \`${url}\``);
                const response = await fetch(`${url}${parseQueryParams(args.params)}`, args.request);
                const data     = await response.json();
                setData(data);
                setSuccess(true);
            } catch (e) {
                console.error(e.message);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, data, error, success };
}
