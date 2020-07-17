import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import Admin from '../views/AdminView/AdminView';
import SAdmin from '../views/SuperAdminView/SuperAdminView';

class Layout extends Component {
    render(){
        const Hidden = styled.div`  display: none; `
        const Wrapper = styled.div` 
            position: reletive;
            min-width: 1200px;
        `
        return(
            <Fragment>
                <Hidden>
                    <a href="#middle">본문으로 바로가기</a>
                </Hidden>
                <Wrapper>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={(props) => <Admin {...props} />}
                        />
                        <Route
                            exact
                            path="/admin"
                            component={(props) => <SAdmin {...props} />}
                        />
                    </Switch>
                </Wrapper>
            </Fragment>
        )
    }
}

export default Layout;