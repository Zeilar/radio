import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { Loader } from '../layout';
import { Container, H3, Row, Col, H5, fadeIn } from '../styled-components';
import useSRInfiniteQuery from '../../hooks/useSRInfiniteQuery';
import { NavLink } from 'react-router-dom';

export default function Channel({ match }) {
    const id = match.params.id;

    const [headerShadow, setHeaderShadow] = useState(false);

    const programsQuery = useSRInfiniteQuery(
        `channel/${id}/programs`,
        `http://api.sr.se/api/v2/programs/index`,
        { channelid: id, size: 30 },
    );
    const channelQuery = useFetch(`http://api.sr.se/api/v2/channels/${id}?format=json`);

    useEffect(() => {
        console.log(channelQuery, programsQuery);

        function scrollHandler() {
            setHeaderShadow(window.scrollY >= 30);
        }
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
            // destroy audio instance
        }
    }, []);


    function downloading() {
        return programsQuery.isLoading || channelQuery.loading;
    }

    function urlFormat(string = "") {
        return string.replace(" ", "-");
    }

    function renderDynamic() {
        if (downloading()) {
            return <Loader />;
        }
        const channel = channelQuery.data.channel;
        return (
            channelQuery.success && programsQuery.isSuccess && (
                <>
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
                    <Programs>
                        {programsQuery.data.pages.map(page => (
                            page.data.programs.map(program => (
                                <Program color={channelQuery.data.channel.color} key={program.id} as="article">
                                    <ProgramMeta>
                                        <div>
                                            <ProgramName as={NavLink} to={`/program/${program.id}/${urlFormat(program.name)}`}>
                                                {program.name}
                                            </ProgramName>
                                            <ProgramInfo>{program.broadcastinfo}</ProgramInfo>
                                        </div>
                                        <ProgramDescription>{program.description}</ProgramDescription>
                                    </ProgramMeta>
                                </Program>
                            ))
                        ))}
                    </Programs>
                </>
            )
        );
    }

    return (
        <Wrapper>
            {renderDynamic()}
        </Wrapper>
    );
}

const Wrapper = styled(Container).attrs({ justify: "center", col: true })`
    ${fadeIn}
`;

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

const Programs = styled.div`
    display: grid;
    grid-gap: 15px;
    margin-top: 15px;
`;

const Program = styled(Row)`
    border-left: 4px solid #${({ color }) => color};
    background-color: rgb(${({ theme }) => theme.color.bodyLight});
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    padding: 15px;
`;

const ProgramMeta = styled(Col).attrs({ align: "flex-start" })`
    
`;

const ProgramDescription = styled.p`
    margin-top: 10px;
`;

const ProgramName = styled(H5).attrs({ exact: true })`
    color: rgb(${({ theme }) => theme.color.textPrimary});
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ProgramInfo = styled.p`
    margin-left: 8px;
    display: inline;
    font-family: Poppins;
    font-style: italic;
`;
