import styled from 'styled-components';
import ChannelThumb from '../layout/ChannelThumb';
import { Button, Col, Container, fadeIn } from '../styled-components';
import { Loader } from '../layout';
import useSRInfiniteQuery from '../../hooks/useSRInfiniteQuery';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Home() {
    const {
        data: channels,
        isSuccess,
        isFetchingNextPage,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = useSRInfiniteQuery("channels", "http://api.sr.se/api/v2/channels", { size: 30 });

    const { user } = useContext(UserContext);

    const [likedChannels, setLikedChannels] = useState([]);

    useEffect(() => {
        if (!user || !user.channelLikes) {
            return;
        }
        (async () => {
            const likedChannels = await Promise.all(user.channelLikes.map(async like => {
                const response = await fetch(`http://api.sr.se/api/v2/channels/${like}?format=json`);
                const { channel } = await response.json();
                return channel;
            }));
            console.log(likedChannels);
            setLikedChannels(likedChannels);
        })();
    }, [user]);

    console.log(likedChannels);

    return (
        <Wrapper>
            {isLoading && <Loader />}
            <Channels>
                {isSuccess && channels.pages.map(page => (
                    page.data.channels.map(channel => <ChannelThumb channel={channel} key={channel.id} />)
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
