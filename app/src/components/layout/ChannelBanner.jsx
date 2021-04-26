import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Col, Row, H3, H5, H4 } from '../styled-components';

export default function ChannelBanner({ channel = {}, channelUrl }) {
    const [headerShadow, setHeaderShadow] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setHeaderShadow(window.scrollY >= 30);
        }
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    return (
        <ChannelWrapper shadow={headerShadow}>
            <ChannelIcon src={channel.image} />
            <ChannelContent color={channel.color}>
                <ChannelMeta>
                    <ChannelName>{channel.name}</ChannelName>
                    <ChannelType>{channel.channeltype}</ChannelType>
                </ChannelMeta>
                <ChannelLinks>
                    <ChannelLink as={NavLink} to={channelUrl} color={channel.color} exact>
                        Programs
                    </ChannelLink>
                    <ChannelLink as={NavLink} to={`${channelUrl}/schedule`} color={channel.color} exact>
                        Schedule
                    </ChannelLink>
                </ChannelLinks>
            </ChannelContent>
        </ChannelWrapper>
    );
}

const ChannelWrapper = styled(Row).attrs({ align: "center" })`
    position: sticky;
    transition: 0.05s;
    ${({ theme, shadow }) => css`
        background-color: rgb(${shadow ? theme.color.bodyLight : theme.color.body});
        top: ${theme.navbarHeight}px;
        box-shadow: ${shadow && "0 0 10px 0 rgba(0, 0, 0, 0.15)"};
    `}
`;

const ChannelContent = styled(Row).attrs({ align: "center" })`
    border-top: 2px solid transparent;
    border-bottom: 4px solid #${({ color }) => color};
    height: 100px;
    flex: 1;
`;

const ChannelMeta = styled(Col)`
    margin-left: 10px;
`;

const ChannelIcon = styled.img`
    width: 100px;
`;

const ChannelName = styled(H3)`
    
`;

const ChannelType = styled(H5)`
    font-weight: normal;
    margin-top: 5px;
`;

const ChannelLinks = styled.div`
    display: grid;
    grid-gap: 15px;
    align-self: flex-end;
    margin-left: auto;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 15px;
    margin-right: 10px;
`;

const ChannelLink = styled(H4)`
    text-decoration: none;
    ${({ color }) => css`
        &.active {
            color: #${color};
        }
    `}
`;
