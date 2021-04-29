import { NavLink } from 'react-router-dom';
import * as Styles from './channel.styles';
import { useSRInfiniteQuery } from '../../../hooks';
import { Loader } from '../../layout';
import { useEffect } from 'react';
import { H3 } from '../../styled-components';
import _ from 'lodash';

export default function ChannelPrograms({ channel, formatForUrl, activeCategory, setSidebarVisible }) {
    const columns = 3;

    const { data, isLoading, refetch, isFetching, isSuccess } = useSRInfiniteQuery(
        `channel/${channel.id}/programs`,
        "http://api.sr.se/api/v2/programs/index",
        { channelid: channel.id, size: 30, programcategoryid: activeCategory },
    );

    useEffect(() => {
        refetch();
    }, [activeCategory]);

    useEffect(() => {
        setSidebarVisible(true);
        return () => {
            setSidebarVisible(false);
        }
    }, [setSidebarVisible]);

    if (isLoading || isFetching) {
        return <Loader />;
    }

    const noResults = !isFetching && !isLoading && data.pages[0].data.programs.length === 0;

    return (
        <Styles.Programs columns={columns}>
            {noResults && <H3>Inga resultat</H3>}
            {isSuccess && data.pages.map(page => (
                _.chunk(page.data.programs, columns).map((column, i) => (
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
