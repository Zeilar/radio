import { NavLink } from 'react-router-dom';
import * as Styles from './channel.styles';
import { useSRInfiniteQuery } from '../../../hooks';
import { Loader } from '../../layout';
import { useEffect } from 'react';
import { H3 } from '../../styled-components';

export default function ChannelPrograms({ channel, formatForUrl, activeCategory, setSidebarVisible }) {
    const columns = 3;

    const { data, isLoading, refetch, isFetching } = useSRInfiniteQuery(
        `channel/${channel.id}/programs/${activeCategory}`,
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

    if (isLoading) {
        return <Loader />;
    }

    const noResults = data.pages[0].data.programs.length === 0;

    return (
        <>
            <Styles.Programs columns={columns}>
                {noResults && <H3>Inga resultat</H3>}
                {data.pages.map(page => (
                    page.data.programs.map(program => (
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
                    ))
                ))}
            </Styles.Programs>
            {isFetching && <Loader />}
        </>
    );
}
