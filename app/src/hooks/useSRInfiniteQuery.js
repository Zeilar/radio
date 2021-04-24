import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

export default function useSRInfiniteQuery(name, url, ...queryParams) {
    const query = useInfiniteQuery(name, async ({ pageParam = 1 }) => {
        if (queryParams.length > 0) {
            // Parse from { key: value } to `key=value`
            queryParams = queryParams.map(param => (
                `${Object.keys(param)[0]}=${Object.values(param)[0]}`
            )); 

            queryParams = `&${queryParams.join("&")}`; // Parse to URI query parameters
        } else {
            queryParams = "";
        }

        const response = await fetch(`${url}?format=json${queryParams}&page=${pageParam}`);
        const data = await response.json();
        
        function getNextPage() {
            if (!pageParam || !data.pagination) {
                return false;
            }
            return data.pagination.totalpages > pageParam ? data.pagination.page + 1 : false;
        }

        return { data, nextPage: getNextPage() };
    }, { getNextPageParam: query => query.nextPage });

    useEffect(() => {
        function attemptToLoadMore() {
            if (!query.hasNextPage || query.isFetchingNextPage) {
                return;
            }

			const scrollPosition = window.innerHeight + window.scrollY,
				bottomPosition = document.body.offsetHeight;
            
			if (scrollPosition >= bottomPosition * 0.8) {
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
