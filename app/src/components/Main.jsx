import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from 'styled-components';
import { Home, Channel, Programs } from "./views";
import { Navbar, Player, ScrollToTop } from "./layout";

export default function Main() {
    return (
        <Router>
            <Wrapper>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/kanal/:id/:name?" component={Channel} />
                    <Route path="/program" exact component={Programs} />
                    {/* <Route path="/schedule" exact component={Schedule} /> */}
                    <Route>
                        404
                    </Route>
                </Switch>
                <Player />
                <ScrollToTop />
            </Wrapper>
        </Router>
    );
}

const Wrapper = styled.main`
    ${({ theme }) => css`
        min-height: 100vh;
        background-color: rgb(${theme.color.body});
        color: rgb(${theme.color.textPrimary});
    `}
`;
