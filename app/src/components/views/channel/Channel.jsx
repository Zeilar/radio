import { useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import { Loader, ChannelBanner } from '../../layout';
import { Container, fadeIn } from '../../styled-components';
import useSRInfiniteQuery from '../../../hooks/useSRInfiniteQuery';
import ChannelPrograms from './ChannelPrograms';
import ChannelSchedule from './ChannelSchedule';
import { Route, Switch } from 'react-router';

export function formatForUrl(string) {
    return string.replace(" ", "-");
}

export function getChannelUrl(channel = {}) {
    return `/channel/${channel.id}/${formatForUrl(channel.name)}`;
}

export default function Channel({ match }) {
    const { id } = match.params;

    const programsQuery = useSRInfiniteQuery(
        `channel/${id}/programs`,
        "http://api.sr.se/api/v2/programs/index",
        { channelid: id, size: 30 },
    );
    const channelQuery = useFetch(`http://api.sr.se/api/v2/channels/${id}`, {
        params: { format: "json" },
    });

    useEffect(() => {
        return () => {
            // destroy audio instance
        }
    }, []);

    // console.log(programsQuery);

    function downloading() {
        return programsQuery.isLoading || channelQuery.loading;
    }

    function renderDynamic() {
        if (downloading()) {
            return <Loader />;
        }
        if (channelQuery.error || programsQuery.isError) {
            return null;
        }
        const channel = channelQuery.data.channel;
        return (
            channelQuery.success && programsQuery.isSuccess && (
                <>
                    <ChannelBanner channelUrl={match.url} channel={channel} />
                    <Switch>
                        <Route path={`${match.url}/tabla`} exact>
                            <ChannelSchedule channel={channel} programs={programsQuery.data.pages} />
                        </Route>
                        <Route>
                            <ChannelPrograms channel={channel} programs={programsQuery.data.pages} />
                        </Route>
                    </Switch>
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
