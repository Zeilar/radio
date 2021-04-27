import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Col, Row, H3, H5, H4 } from '../styled-components';
import PlayerButton from './PlayerButton';

export default function ChannelBanner({ channel = {}, channelUrl }) {
    return (
        <ChannelWrapper>
            <ChannelIcon src={channel.image} />
            <ChannelContent color={channel.color}>
                <ChannelMeta>
                    <H3>{channel.name}</H3>
                    <ChannelType>{channel.channeltype}</ChannelType>
                </ChannelMeta>
                <ChannelNav>
                    <PlayerButton color={channel.color} args={{
                        src: channel.liveaudio.url,
                        name: channel.name,
                        description: channel.tagline,
                    }} />
                    <ChannelLinks>
                        <ChannelLink as={NavLink} to={`${channelUrl}/tabla`} color={channel.color} exact>
                            Tablå
                        </ChannelLink>
                        <ChannelLink as={NavLink} to={channelUrl} color={channel.color} exact>
                            Program
                        </ChannelLink>
                    </ChannelLinks>
                </ChannelNav>
            </ChannelContent>
        </ChannelWrapper>
    );
}

const ChannelWrapper = styled(Row)`
    ${({ theme }) => css`
        background-color: rgb(${theme.color.body});
    `}
`;

const ChannelContent = styled(Row).attrs({ align: "flex-end" })`
    height: 100px;
    flex: 1;
`;

const ChannelMeta = styled(Col)`
    font-family: Roboto;
    margin-left: 10px;
`;

const ChannelIcon = styled.img`
    width: 100px;
`;

const ChannelType = styled(H5)`
    font-weight: normal;
    margin-top: 5px;
`;

const ChannelNav = styled(Col).attrs({ justify: "space-between" })`
    margin-left: auto;
    height: 100%;
`;

const ChannelLinks = styled.nav`
    display: grid;
    grid-gap: 15px;
    margin-left: auto;
    grid-template-columns: auto auto;
`;

const ChannelLink = styled(H4)`
    text-decoration: none;
    text-align: right;
    font-family: Poppins;
    ${({ color }) => css`
        &.active {
            color: #${color};
        }
    `}
`;
