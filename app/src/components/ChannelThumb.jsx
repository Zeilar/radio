import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { H5, Button, Row } from './styled-components';
import { mdiPlay } from '@mdi/js';
import Icon from '@mdi/react';
import { useContext } from 'react';
import { PlayerContext } from './contexts/PlayerContext';

export default function ChannelThumb({ channel = {} }) {
    const { changeTrack } = useContext(PlayerContext);
    
    return (
        <Wrapper>
            <PlayToggler onClick={() => changeTrack(channel.liveaudio.url, channel.name, channel.tagline)}>
                <PlayTogglerIcon path={mdiPlay} />
            </PlayToggler>
            <ChannelIcon src={channel.image ?? "https://static-cdn.sr.se/images/2388/787c76ef-8d6b-4e34-b26c-2b4036781b0c.jpg?preset=api-default-square"} />
            <HeaderWrapper color={channel.color}>
                <Header as={Link} to={`/kanal/${channel.id}/${channel.name.replace(' ', '-')}`}>{channel.name}</Header>
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

const Header = styled(H5)`
    font-weight: normal;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const HeaderWrapper = styled(Row).attrs({ align: "center" })`
    background-color: rgb(${({ theme }) => theme.color.bodyLight});
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
    border-bottom: 4px solid #${({ color }) => color};
    height: 100%;
    padding: 15px;
    flex: 1;
`;

const ChannelIcon = styled.img.attrs({ loading: "lazy" })`
    max-width: 100%;
    width: 60px;
    margin-left: 5px;
`;

const PlayToggler = styled(Button)`
    width: 60px;
    height: 60px;
    display: flex;
    padding: 10px;
    align-items: center;
`;

const PlayTogglerIcon = styled(Icon)`

`;
