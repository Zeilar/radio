import { NavLink } from 'react-router-dom';
import { chunk } from '../../../helpers';
import * as Styles from './channel.styles';
import { useSRInfiniteQuery } from '../../../hooks';
import { Loader } from '../../layout';
import { useEffect } from 'react';

export default function ChannelPrograms({ channel, formatForUrl, activeCategory }) {
    const columns = 3;

    const { data, isLoading, refetch, isFetching } = useSRInfiniteQuery(
        `channel/${channel.id}/programs`,
        "http://api.sr.se/api/v2/programs/index",
        { channelid: channel.id, size: 30, programcategoryid: activeCategory },
    );

    useEffect(() => {
        refetch();
    }, [activeCategory]);


    if (isLoading || isFetching) {
        return <Loader />;
    }

    return (
        <Styles.Programs columns={columns}>
            {data.pages.map(page => (
                chunk(page.data.programs, columns).map((column, i) => (
                    <Styles.ProgramColumn key={i}>
                        {column.map(program => (
                            <Styles.Program color={channel.color} key={program.id} as="article">
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
