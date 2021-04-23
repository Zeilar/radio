import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import ChannelThumb from '../ChannelThumb';
import { Row, H1, Col } from '../styled-components';
import Loader from '../Loader';
import { mdiRadio } from '@mdi/js';
import Icon from '@mdi/react';
import { useInfiniteQuery } from 'react-query';

export default function Home() {
    const [activeChannel, setActiveChannel] = useState();

    const { user } = useContext(UserContext);

    const { data, isSuccess, isFetchingNextPage, loading, hasNextPage, fetchNextPage } = useInfiniteQuery("channels", async ({ pageParam = 1 }) => {
        const response = await fetch(`http://api.sr.se/api/v2/channels?format=json&size=20&page=${pageParam}`);
        const { channels, pagination } = await response.json();
        
        function calculateNextPage() {
            if (!pageParam) {
                return false;
            }
            return pagination.totalpages > pageParam ? pagination.page + 1 : false;
        }

        return { data: channels, nextPage: calculateNextPage() };
    }, { getNextPageParam: lastQuery => lastQuery.nextPage });

    function playChannel(id) {
        if (!id) return;
        setActiveChannel(id);
    }

    function pauseChannel() {
        setActiveChannel(null);
    }

    useEffect(() => {
        function attemptToLoadMore() {
            // setScrollToTopVisible(window.scrollY >= 1500 ? true : false);

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
            {/* {loading && <Loader message="Preparing your meals" />} */}
            <Channels>
                {isSuccess && data.pages.map(page => (
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
        </Wrapper>
    );
}

const Wrapper = styled(Col)`

`;

const Channels = styled.div`
    margin: 30px auto;
    display: grid;
    grid-gap: 15px;
    width: 500px;
`;
