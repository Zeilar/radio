import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { Loader, ChannelBanner } from '../layout';
import { Container, Col, H5, fadeIn } from '../styled-components';
import useSRInfiniteQuery from '../../hooks/useSRInfiniteQuery';
import { NavLink } from 'react-router-dom';

export default function Channel({ match }) {
    const id = match.params.id;

    const programsQuery = useSRInfiniteQuery(
        `channel/${id}/programs`,
        `http://api.sr.se/api/v2/programs/index`,
        { channelid: id, size: 30 },
    );
    const channelQuery = useFetch(`http://api.sr.se/api/v2/channels/${id}`, { params: { format: "json" } });

    useEffect(() => {
        return () => {
            // destroy audio instance
        }
    }, []);

    // console.log(programsQuery);

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
                    <ChannelBanner channel={channel} />
                    <Programs>
                        {programsQuery.data.pages.map(page => (
                            page.data.programs.map(program => (
                                <Program color={channel.color} key={program.id} as="article">
                                    <ProgramImage src={program.programimagetemplatewide} />
                                    <ProgramCard>
                                        <ProgramName as={NavLink} to={`/program/${program.id}/${urlFormat(program.name)}`}>
                                            {program.name}
                                        </ProgramName>
                                        <ProgramInfo>{program.broadcastinfo}</ProgramInfo>
                                        <ProgramDescription>{program.description}</ProgramDescription>
                                    </ProgramCard>
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

const Programs = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
`;

const Program = styled(Col)`
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    ${({ theme, color }) => css`
        border-bottom: 4px solid #${color};
        background-color: rgb(${theme.color.bodyLight});
        border-radius: ${theme.borderRadius}px;
    `}
`;

const ProgramCard = styled(Col).attrs({ align: "flex-start" })`
    padding: 15px;
`;

const ProgramDescription = styled.p`
    margin-top: 15px;
`;

const ProgramName = styled(H5).attrs({ exact: true })`
    color: rgb(${({ theme }) => theme.color.textPrimary});
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ProgramInfo = styled.p`
    display: inline;
    font-family: Poppins;
    font-style: italic;
`;

const ProgramImage = styled.img`
    
`;
