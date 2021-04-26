import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Col, H5 } from '../../styled-components';
import { formatForUrl } from './Channel';

export default function ChannelPrograms({ channel, programs }) {
    return (
        <Programs>
            {programs.map(page => (
                page.data.programs.map(program => (
                    <Program color={channel.color} key={program.id} as="article">
                        <ProgramImage src={program.programimagetemplatewide} />
                        <ProgramCard>
                            <ProgramName as={NavLink} to={`/program/${program.id}/${formatForUrl(program.name)}`}>
                                {program.name}
                            </ProgramName>
                            <ProgramInfo>{program.broadcastinfo}</ProgramInfo>
                            <ProgramDescription>{program.description}</ProgramDescription>
                        </ProgramCard>
                    </Program>
                ))
            ))}
        </Programs>
    );
}

const Programs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
`;

const Program = styled(Col)`
    ${({ theme, color }) => css`
        border: 1px solid rgb(${theme.color.borderPrimary});
        border-bottom: 4px solid #${color};
        background-color: rgb(${theme.color.bodyLight});
        border-bottom-left-radius: ${theme.borderRadius}px;
        border-bottom-right-radius: ${theme.borderRadius}px;
    `}
`;

const ProgramCard = styled(Col).attrs({ align: "flex-start" })`
    padding: 20px;
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
    object-fit: cover;
`;