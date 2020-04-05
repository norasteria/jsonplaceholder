import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Posts from "../components/Posts";

const browserHistory = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path={["/", "/posts"]} component={Posts} />
        </Switch>
      </Router>
    );
  }
}
