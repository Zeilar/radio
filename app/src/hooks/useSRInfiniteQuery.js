import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

export default function useSRInfiniteQuery(name = "", url = "", queryParams = {}) {
    function parseQueryParams(params = {}) {
        if (Object.keys(params).length <= 0) {
            return "";
        }

        // Parse { key: value } to `key=value` strings
        params = Object
            .entries(params)
            .map(([key, val]) => `${key}=${val}`)
            .join("&");

        return `&${params}`; // Parse to URI query parameters
    }
    
    const query = useInfiniteQuery(name, async ({ pageParam = 1 }) => {
        const response = await fetch(`${url}?format=json${parseQueryParams(queryParams)}&page=${pageParam}`);
        const data     = await response.json();
        
        function getNextPage() {
            if (!pageParam || !data.pagination) {
                return false;
            }
            return data.pagination.totalpages > pageParam
                ? data.pagination.page + 1
                : false;
        }

        return { data, nextPage: getNextPage() };
    }, { getNextPageParam: query => query.nextPage });

    useEffect(() => {
        function attemptToLoadMore() {
            if (!query.hasNextPage || query.isFetchingNextPage) {
                return;
            }

			const
                scrollPosition = window.innerHeight + window.scrollY,
				bottomPosition = document.body.offsetHeight;
            
			if (scrollPosition >= (bottomPosition * 0.8)) {
				query.fetchNextPage();
			}
        }
        document.addEventListener("scroll", attemptToLoadMore);
        return () => {
            document.removeEventListener("scroll", attemptToLoadMore);
        }
    }, [query]);

    return query;
}
