import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card, Spin, Button, Divider } from "antd";

import "./ProfilePosts.css";
import { fetchPosts, fetchComments } from "./profile.action";
import {
  userPosts as selectPosts,
  userPostsLoading as selectLoading,
  userComments as selectComment,
} from "./profile.selector";

const mapActionToProps = { fetchPosts, fetchComments };

const mapStateToProps = (state) => ({
  posts: selectPosts(state),
  loading: selectLoading(state),
  commentsData: selectComment(state),
});

class ProfilePosts extends Component {
  state = {
    selectedPostId: [],
    showAddCommentForm: false,
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchPosts(params);
  }

  commentRender = ({ postId }) => {
    const { selectedPostId } = this.state;

    if (!selectedPostId.includes(postId)) return null;
    const commentData = this.props.commentsData[postId];

    return (
      <Card>
        {commentData &&
          commentData.map((comment, index) => (
            <div key={index}>
              <div>
                <p>
                  <b>{comment.name}</b> <br />
                  <span className="comment-email">{comment.email}</span>
                </p>
              </div>
              <div className="post-comment">{comment.body}</div>
              <Divider />
            </div>
          ))}
      </Card>
    );
  };

  commentOnClick = (postId) => {
    let { selectedPostId } = this.state;

    if (selectedPostId.includes(postId)) {
      return this.setState({
        selectedPostId: selectedPostId.filter((id) => id !== postId),
      });
    }
    selectedPostId.push(postId);
    this.props.fetchComments(postId);
    this.setState({ selectedPostId });
  };

  postsCardRender = () => {
    const CommentsRender = this.commentRender;

    return this.props.posts.map((post, index) => (
      <div key={index}>
        <Card className="post-card" title={post.title}>
          <div>{post.body}</div>

          <Button type="link" onClick={() => this.commentOnClick(post.id)}>
            comments
          </Button>

          <CommentsRender postId={post.id} />
        </Card>
      </div>
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
