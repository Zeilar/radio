import styled, { css } from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import { Loader, ChannelBanner } from '../../layout';
import { Container, fadeIn } from '../../styled-components';
import ChannelPrograms from './ChannelPrograms';
import ChannelSchedule from './ChannelSchedule';
import { Route, Switch } from 'react-router';
import { useState } from 'react';

export default function Channel({ match }) {
    const { id } = match.params;

    const [activeCategory, setActiveCategory] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const channelQuery = useFetch(`http://api.sr.se/api/v2/channels/${id}`, {
        params: { format: "json" },
    });
    
    const categoriesQuery = useFetch("http://api.sr.se/api/v2/programcategories", {
        params: {
            format: "json",
            pagination: false,
        },
    });

    function formatForUrl(string) {
        if (!string) return "";
        return string.replace(" ", "-");
    }
    
    const channel = channelQuery.data?.channel
    return (
        <Wrapper>
            {sidebarVisible && (
                <Sidebar as="aside" color={channel?.color}>
                    <Category 
                        onClick={() => setActiveCategory(null)} 
                        active={activeCategory == null} 
                        color={channel?.color}
                    >
                        Alla
                    </Category>
                    {categoriesQuery.success && categoriesQuery.data.programcategories.map(category => (
                        <Category
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            active={activeCategory === category.id}
                            color={channel?.color}
                        >
                            {category.name}
                        </Category>
                    ))}
                </Sidebar>
            )}
            <ChannelBanner channelUrl={match.url} channel={channel} />
            {channelQuery.loading && <Loader />}
            <Switch>
                <Route path={`${match.url}/tabla`} exact>
                    {channel && (
                        <ChannelSchedule
                            formatForUrl={formatForUrl}
                            channel={channel}
                        />
                    )}
                </Route>
                <Route>
                    {channel && (
                        <ChannelPrograms
                            formatForUrl={formatForUrl}
                            channel={channel}
                            activeCategory={activeCategory}
                            setSidebarVisible={setSidebarVisible}
                        />
                    )}
                </Route>
            </Switch>
        </Wrapper>
    );
}

const Wrapper = styled(Container).attrs({ justify: "center", col: true })`
    ${fadeIn}
    position: relative;
`;

const Sidebar = styled.aside`
    ${fadeIn}
    display: grid;
    grid-gap: 8px;
    position: fixed;
    max-height: 50vh;
    overflow: auto;
    padding-right: 5px;
    &::-webkit-scrollbar {
        width: 10px;
    }
    transform: translateX(calc(-100% - 15px));
    ${({ theme, color }) => css`
        top: ${theme.navbarHeight + 30 + 100 + 15}px;
        &::-webkit-scrollbar-thumb {
            background-color: #${color};
            border-radius: 20px;
        }
    `}
`;

const Category = styled.div`
    cursor: pointer;
    padding: 10px;
    transition: 0.05s;
    user-select: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    ${({ theme }) => css`
        background-color: rgb(${theme.color.bodyLight});
    `}
    ${({ active, color }) => active && css`
        background-color: #${color};
        color: white;
    `}
`;
