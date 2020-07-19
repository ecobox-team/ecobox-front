import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Main from '../views/MainView/MainView';
import Admin from '../views/AdminView/AdminView';
import SAdmin from '../views/SuperAdminView/SuperAdminView';

class Layout extends Component {
    render(){
        const Hidden = styled.div`  display: none; `
        const Wrapper = styled.div` 
            position: relative;
            min-width: 1240px;
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
                            component={(props) => <Main {...props} />}
                        />
                        <Route
                            exact
                            path="/admin"
                            component={(props) => <Admin {...props} />}
                        />
                        <Route
                            exact
                            path="/s_admin"
                            component={(props) => <SAdmin {...props} />}
                        />
                    </Switch>
                </Wrapper>
            </Fragment>
        )
    }
}

export default Layout;