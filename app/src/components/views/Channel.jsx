import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { Loader } from '../layout';
import { Container } from '../styled-components';
import useSRInfiniteQuery from '../../hooks/useSRInfiniteQuery';

export default function Channel({ match }) {
    const id = match.params.id;

    const programsQuery = useSRInfiniteQuery(
        `channel/${id}/programs`,
        `http://api.sr.se/api/v2/programs/index`,
        { channelid: id, size: 30 },
    );
    const channelQuery = useFetch(`http://api.sr.se/api/v2/channels/${id}?format=json`);

    console.log(channelQuery, programsQuery);

    function downloading() {
        return programsQuery.loading || channelQuery.loading;
    }

    function renderDynamic() {
        if (downloading()) {
            return <Loader />;
        }
        if (programsQuery.success) {
            return (
                <ProgramsWrapper>
                    {programsQuery.data.programs.map(program => (
                        <Program>
                            {program.description}
                        </Program>
                    ))}
                </ProgramsWrapper>
            );
        }
    }

    return (
        <Wrapper>
            {renderDynamic()}
        </Wrapper>
    );
}

const Wrapper = styled(Container).attrs({ justify: "center" })`
    
`;

const ProgramsWrapper = styled.div`
    background-color: rgb(${({ theme }) => theme.color.bodyDark});
`;

const Program = styled.article`
    
`;
