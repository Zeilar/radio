import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { H2, Button, Row } from './styled-components';
import { mdiPlay, mdiPause, mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';

export default function ChannelThumb({ channel = {}, playing = false, play, pause }) {
    const [loading, setLoading] = useState(false);
    const audio = useRef(new Audio(channel.liveaudio.url));

    useEffect(() => {
        return () => {
            audio.current = null;
        }
    }, []);

    useEffect(() => {
        if (!playing) {
            pauseAudio();
        }
    }, [playing]);

    function pauseAudio() {
        audio.current?.pause();
    }

    async function togglePlaying() {
        if (playing) {
            pauseAudio();
            pause();
        } else {
            try {
                setLoading(true);
                await audio.current.play();
                play(channel.id);
            } catch (e) {
                console.error(`Error when loading channel: ${e}`);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <Wrapper>
            {loading ? (
                <PlayToggler disabled>
                    <PlayTogglerIcon path={mdiLoading} spin={1} />
                </PlayToggler>
            ) : (
                <PlayToggler playing={playing} onClick={togglePlaying}>
                    <PlayTogglerIcon path={playing ? mdiPause : mdiPlay} />
                </PlayToggler>
            )}
            <ChannelIcon src={channel.image ?? "https://static-cdn.sr.se/images/2388/787c76ef-8d6b-4e34-b26c-2b4036781b0c.jpg?preset=api-default-square"} />
            <HeaderWrapper color={channel.color}>
                <Header as={Link} to={`/channel/${channel.id}/${channel.name.replace(' ', '-')}`}>{channel.name}</Header>
            </HeaderWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.35s;
    ${({ theme }) => css`
        color: rgb(${theme.color.textPrimary});
        border-radius: ${theme.borderRadius}px;
    `}
`;

const Header = styled(H2)`
    font-weight: normal;
    font-size: 1.75rem;
    text-decoration: none;
    margin-left: 15px;
    &:hover {
        text-decoration: underline;
    }
`;

const HeaderWrapper = styled(Row).attrs({ align: "center" })`
    background-color: rgb(${({ theme }) => theme.color.bodyLight});
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
    border-bottom: 4px solid #${({ color }) => color};
    height: 100%;
    flex: 1;
`;

const ChannelIcon = styled.img.attrs({ loading: "lazy" })`
    max-width: 100%;
    width: 75px;
    margin-left: 5px;
`;

const PlayToggler = styled(Button)`
    width: 75px;
    height: 75px;
`;

const PlayTogglerIcon = styled(Icon)`
    
`;
