import * as Styles from './channel.styles';
import { useSRInfiniteQuery } from '../../../hooks';
import { Loader } from '../../layout';
import { useContext, useEffect, useState } from 'react';
import { H3 } from '../../styled-components';
import { UserContext } from '../../contexts/UserContext';
import ChannelProgram from './ChannelProgram';

export default function ChannelPrograms({ channel, formatForUrl, activeCategory, setSidebarVisible }) {
    const { data, isLoading, refetch, isFetching } = useSRInfiniteQuery(
        `channel/${channel.id}/programs/${activeCategory}`,
        "https://api.sr.se/api/v2/programs/index",
        { channelid: channel.id, size: 30, programcategoryid: activeCategory },
    );

    const { isLoggedIn, user } = useContext(UserContext);

    const [likedPrograms, setLikedPrograms] = useState([]);

    useEffect(() => {
        if (activeCategory !== "favorites") {
            refetch();            
        }
    }, [activeCategory]);

    useEffect(() => {
        if (!isLoggedIn || !user.programLikes) {
            return;
        }
        (async () => {
            const likedPrograms = await Promise.all(user.programLikes.map(async like => {
                const response = await fetch(`https://api.sr.se/api/v2/programs/${like}?format=json&channelid=${channel.id}`);
                const { program } = await response.json();
                return program;
            }));
            setLikedPrograms(likedPrograms);
        })();
    }, [isLoggedIn, user?.programLikes, channel?.id]);

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
            <Styles.Programs>
                {noResults && <H3>Inga resultat</H3>}
                {data.pages.map(page => {
                    const programs = activeCategory === "favorites" ? likedPrograms : page.data.programs;
                    return (
                        programs.map(program => (
                            program.channel.id === channel.id && (
                                <ChannelProgram
                                    key={program.id}
                                    channel={channel}
                                    program={program}
                                    formatForUrl={formatForUrl}
                                />
                            )
                        ))
                    );
                })}
            </Styles.Programs>
            {isFetching && <Loader />}
        </>
    );
}
