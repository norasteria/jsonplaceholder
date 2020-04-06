import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { List } from "antd";

import { fetchAlbums } from "../profile.action";
import { userAlbum as selectAlbum } from "../profile.selector";

const mapActionToProps = { fetchAlbums };

const mapStateToProps = (state) => ({
  albumsList: selectAlbum(state),
});

class AlbumList extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchAlbums(params);
  }

  listItemRender = (item) => {
    const actionPath = `${this.props.location.pathname}/photos?albumId=${item.id}`;

    return (
      <List.Item actions={[<a href={actionPath}>See photos</a>]}>
        {item.title}
      </List.Item>
    );
  };
  render() {
    return (
      <List
        dataSource={this.props.albumsList}
        renderItem={this.listItemRender}
      />
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(AlbumList);
