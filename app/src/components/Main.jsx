import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from 'styled-components';
import Home from "./views/Home";
import Channel from "./views/Channel";
import Programs from "./views/Programs";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Main() {
    return (
        <Router>
            <Wrapper>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/channel/:id/:name?" exact component={Channel} />
                    <Route path="/programs" exact component={Programs} />
                    <Route>
                        404
                    </Route>
                </Switch>
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
