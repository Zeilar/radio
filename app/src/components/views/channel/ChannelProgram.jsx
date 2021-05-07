import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import * as Styles from './channel.styles';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function ChannelProgram({ channel, program, formatForUrl }) {
    const { isLoggedIn, hasLikedProgram, likeProgram, unlikeProgram } = useContext(UserContext);

    if (!program) {
        return null;
    }

    function programLikeToggler() {
        if (hasLikedProgram(program.id)) {
            return <ProgramLikeToggler path={mdiHeart} onClick={() => unlikeProgram(program.id)} />;
        }
        return <ProgramLikeToggler path={mdiHeartOutline} onClick={() => likeProgram(program.id)} />;
    }

    return (
        <Styles.Program color={channel.color} key={program.id} as="article">
            {isLoggedIn && programLikeToggler()}
            <Styles.ProgramImage src={program.programimagetemplatewide} />
            <Styles.ProgramCard>
                <Styles.ProgramName as={NavLink} to={`/program/${program.id}/${formatForUrl(program?.name)}`}>
                    {program.name}
                </Styles.ProgramName>
                <Styles.ProgramInfo>{program.broadcastinfo}</Styles.ProgramInfo>
                <Styles.ProgramDescription>{program.description}</Styles.ProgramDescription>
            </Styles.ProgramCard>
        </Styles.Program>
    );
}

const ProgramLikeToggler = styled(Icon)`
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    color: red;
`;
