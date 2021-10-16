import styled, { css } from 'styled-components';
import ChannelThumb from '../layout/ChannelThumb';
import { Button, Container, fadeIn, H1, H5, Row } from '../styled-components';
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
    } = useSRInfiniteQuery("channels", "https://api.sr.se/api/v2/channels", { size: 30 });

    const { user, isLoggedIn } = useContext(UserContext);

    const [likedChannels, setLikedChannels] = useState([]);
    const [renderLiked, setRenderLiked] = useState(false);

    useEffect(() => {
        if (!isLoggedIn || !user.channelLikes) {
            return;
        }
        (async () => {
            const likedChannels = await Promise.all(user.channelLikes.map(async like => {
                const response = await fetch(`https://api.sr.se/api/v2/channels/${like}?format=json`);
                const { channel } = await response.json();
                return channel;
            }));
            setLikedChannels(likedChannels);
        })();
    }, [isLoggedIn, user?.channelLikes]);

    function toggleLiked() {
        setRenderLiked(p => !p);
    }

    return (
        <Wrapper>
            <Banner>
                <H1>Kanaler</H1>
                {isLoggedIn && (
                    <FavoritesToggler onClick={toggleLiked}>
                        {renderLiked ? "Visa alla" : "Visa favoriter"}
                    </FavoritesToggler>
                )}
            </Banner>
            {isLoading && <Loader />}
            <Channels>
                {isSuccess && !renderLiked && channels.pages.map(page => (
                    page.data.channels.map(channel => <ChannelThumb channel={channel} key={channel.id} />)
                ))}
                {renderLiked && likedChannels.map(channel => <ChannelThumb channel={channel} key={channel.id} />)}
            </Channels>
            {isFetchingNextPage && <Loader />}
            {!isLoading && !isFetchingNextPage && hasNextPage && !renderLiked && (
                <LoadMore onClick={() => fetchNextPage()}>Load more</LoadMore>
            )}
        </Wrapper>
    );
}

const Wrapper = styled(Container).attrs({ align: "center", col: true })`
    ${fadeIn}
`;

const Channels = styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            grid-template-columns: 1fr;
        }
    `}
`;

const Banner = styled(Row).attrs({ align: "baseline", justify: "space-between" })`
    margin-bottom: 15px;
    width: 100%;
`;

const LoadMore = styled(Button)`
    margin-bottom: 30px;
`;

const FavoritesToggler = styled(H5)`
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
`;
