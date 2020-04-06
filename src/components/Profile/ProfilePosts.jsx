import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchPosts } from "./profile.action";

const mapActionToProps = { fetchPosts };

class ProfilePosts extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchPosts(params);
  }

  render() {
    return <>this is user's posts</>;
  }
}

export default compose(
  withRouter,
  connect(null, mapActionToProps)
)(ProfilePosts);
