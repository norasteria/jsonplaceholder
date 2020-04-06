import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card, Spin } from "antd";

import "./ProfilePosts.css";
import { fetchPosts } from "./profile.action";
import {
  userPosts as selectPosts,
  userPostsLoading as selectLoading,
} from "./profile.selector";

const mapActionToProps = { fetchPosts };

const mapStateToProps = (state) => ({
  posts: selectPosts(state),
  loading: selectLoading(state),
});

class ProfilePosts extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchPosts(params);
  }

  postsCardRender = () => {
    return this.props.posts.map((post) => (
      <Card className="post-card" title={post.title}>
        {post.body}
      </Card>
    ));
  };

  render() {
    const PostsRender = this.postsCardRender;
    return (
      <Spin spinning={this.props.loading}>
        <PostsRender />
      </Spin>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(ProfilePosts);
