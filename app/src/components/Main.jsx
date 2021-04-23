import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from 'styled-components';
import Home from "./views/Home";
import Channel from "./views/Channel";

export default function Main() {
    return (
        <Wrapper>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/channel/:id/:name?" exact component={Channel} />
                    <Route>
                        404
                    </Route>
                </Switch>
            </Router>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    ${({ theme }) => css`
        min-height: 100vh;
        background-color: rgb(${theme.color.body});
        color: rgb(${theme.color.textPrimary});
    `}
`;
