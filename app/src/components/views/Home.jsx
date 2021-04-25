import { useState } from 'react';
import styled from 'styled-components';
import ChannelThumb from '../ChannelThumb';
import { Button, Col, Container, fadeIn } from '../styled-components';
import { Loader } from '../layout';
import useSRInfiniteQuery from '../../hooks/useSRInfiniteQuery';

export default function Home() {
    const [activeChannel, setActiveChannel] = useState();

    const {
        data: channels,
        isSuccess,
        isFetchingNextPage,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = useSRInfiniteQuery("channels", "http://api.sr.se/api/v2/channels", { size: 30 });

    function playChannel(id) {
        if (!id) return;
        setActiveChannel(id);
    }

    function pauseChannel() {
        setActiveChannel(null);
    }

    return (
        <Wrapper>
            {isLoading && <Loader />}
            <Channels>
                {isSuccess && channels.pages.map(page => (
                    page.data.channels.map(channel => (
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
            {!isLoading && !isFetchingNextPage && hasNextPage && (
                <LoadMore onClick={() => fetchNextPage()}>Load more</LoadMore>
            )}
        </Wrapper>
    );
}

const Wrapper = styled(Col).attrs({ align: "center" })`
    ${fadeIn}
`;

const Channels = styled(Container)`
    margin: 0 auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
`;

const LoadMore = styled(Button)`
    margin-bottom: 30px;
`;
