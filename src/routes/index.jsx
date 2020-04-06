import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Layout from "../components/common/layout";
import Profile from "../components/Profile";
import Users from "../components/Users";

const browserHistory = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Layout>
            <Route exact path={["/", "/users"]} component={Users} />
            <Route
              path="/profile/:userId/:profileContent"
              component={Profile}
            />
          </Layout>
        </Switch>
      </Router>
    );
  }
}
