import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Col, Row, H3, H5 } from '../styled-components';

export default function ChannelBanner({ channel = {} }) {
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
                    <ChannelName>
                        {channel.name}
                    </ChannelName>
                    <ChannelType>{channel.channeltype}</ChannelType>
                </ChannelMeta>
            </ChannelContent>
        </ChannelWrapper>
    );
}

const ChannelWrapper = styled(Row).attrs({ align: "center" })`
    position: sticky;
    ${({ theme, shadow }) => css`
        background-color: rgb(${theme.color.body});
        top: ${theme.navbarHeight}px;
        box-shadow: ${shadow && "0 0 10px 0 rgba(0, 0, 0, 0.5)"};
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
