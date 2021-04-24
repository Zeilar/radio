import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChannelThumb from '../ChannelThumb';
import { Button, Col, Container } from '../styled-components';
import { Loader } from '../layout';
import { useInfiniteQuery } from 'react-query';

export default function Home() {
    const [activeChannel, setActiveChannel] = useState();

    const {
        data: channels,
        isSuccess,
        isFetchingNextPage,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery("channels", async ({ pageParam = 1 }) => {
        const response = await fetch(`http://api.sr.se/api/v2/channels?format=json&size=30&page=${pageParam}`);
        const { channels, pagination } = await response.json();
        
        function calculateNextPage() {
            if (!pageParam) {
                return false;
            }
            return pagination.totalpages > pageParam ? pagination.page + 1 : false;
        }

        return { data: channels, nextPage: calculateNextPage() };
    }, { getNextPageParam: query => query.nextPage });

    function playChannel(id) {
        if (!id) return;
        setActiveChannel(id);
    }

    function pauseChannel() {
        setActiveChannel(null);
    }

    useEffect(() => {
        function attemptToLoadMore() {
            if (!hasNextPage || isFetchingNextPage) {
                return;
            }

			const scrollPosition = window.innerHeight + window.scrollY,
				bottomPosition = document.body.offsetHeight;
            
			if (scrollPosition >= bottomPosition * 0.8) {
				fetchNextPage();
			}
        }
        document.addEventListener("scroll", attemptToLoadMore);
        return () => {
            document.removeEventListener("scroll", attemptToLoadMore);
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    return (
        <Wrapper>
            {isLoading && <Loader />}
            <Channels>
                {isSuccess && channels.pages.map(page => (
                    page.data.map(channel => (
                        <ChannelThumb
                            playing={channel.id === activeChannel}
                            channel={channel}
                            play={playChannel}
                            pause={pauseChannel}
                            key={channel.id}
                        />
                    ))
                ))}
            </Channels>
            {isFetchingNextPage && <Loader />}
            {!isLoading && !isFetchingNextPage && hasNextPage && <Button onClick={() => fetchNextPage()}>Load more</Button>}
        </Wrapper>
    );
}

const Wrapper = styled(Col).attrs({ align: "center" })`
    padding: 30px;
`;

const Channels = styled(Container)`
    margin: 0 auto 30px auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
`;
