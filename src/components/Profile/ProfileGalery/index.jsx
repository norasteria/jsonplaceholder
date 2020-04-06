import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { List } from "antd";

import "./index.css";
import { fetchAlbums } from "../profile.action";
import { userAlbum as selectAlbum } from "../profile.selector";

const mapActionToProps = { fetchAlbums };

const mapStateToProps = (state) => ({
  albumsList: selectAlbum(state),
});

class ProfileAlbum extends Component {
  componentDidMount() {
    console.clear();
    console.log({ props: this.props });

    const { params } = this.props.match;
    this.props.fetchAlbums(params);
  }

  listItemRender = (item) => {
    return (
      <List.Item actions={[<a href="galery">See photos</a>]}>
        {item.title}
      </List.Item>
    );
  };

  render() {
    return (
      <div>
        <List
          dataSource={this.props.albumsList}
          renderItem={this.listItemRender}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(ProfileAlbum);
