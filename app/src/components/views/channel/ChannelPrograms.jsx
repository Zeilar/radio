import { NavLink } from 'react-router-dom';
import { chunk } from '../../../helpers';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import * as Styles from './channel.styles';

export default function ChannelPrograms({ channel, programs, formatForUrl }) {
    const columns = 3;
    return (
        <Styles.Programs columns={columns}>
            {programs.map(page => (
                chunk(page.data.programs, columns).map((column, i) => (
                    <Styles.ProgramColumn key={i}>
                        {column.map(program => (
                            <Styles.Program color={channel.color} key={program.id} as="article">
                                <Icon path={mdiHeart} size={1} style={{ position: "absolute", right: 10, top: 10, color: "red" }} />
                                <Styles.ProgramImage src={program.programimagetemplatewide} />
                                <Styles.ProgramCard>
                                    <Styles.ProgramName as={NavLink} to={`/program/${program.id}/${formatForUrl(program?.name)}`}>
                                        {program.name}
                                    </Styles.ProgramName>
                                    <Styles.ProgramInfo>{program.broadcastinfo}</Styles.ProgramInfo>
                                    <Styles.ProgramDescription>{program.description}</Styles.ProgramDescription>
                                </Styles.ProgramCard>
                            </Styles.Program>
                        ))}
                    </Styles.ProgramColumn>
                ))
            ))}
        </Styles.Programs>
    );
}
