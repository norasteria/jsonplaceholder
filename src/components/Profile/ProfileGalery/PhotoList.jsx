import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import qs from "querystring";

import "./PhotoList.css";
import { fetchPhotoByAlbumId } from "../profile.action";
import { userPhotoByAlbum as selectPhotos } from "../profile.selector";

const mapActionToProps = { fetchPhotoByAlbumId };

const mapStateToProps = (state) => ({
  photos: selectPhotos(state),
});

class PhotoList extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const { albumId } = qs.parse(search.replace("?", ""));
    this.props.fetchPhotoByAlbumId(albumId);
  }

  onBackToAlbumClick = () => {
    this.props.history.goBack();
  };

  cardPhotoRender = () => {
    return this.props.photos.map((photo, index) => (
      <Card
        key={index}
        cover={<img alt="user-photo" src={photo.thumbnailUrl} />}
        className="card-photo"
      >
        {photo.title}
      </Card>
    ));
  };

  render() {
    const CardPhoto = this.cardPhotoRender;

    return (
      <>
        <Button
          icon={<LeftOutlined />}
          type="link"
          onClick={this.onBackToAlbumClick}
        >
          Back to album list
        </Button>
        <div>
          <CardPhoto />
        </div>
      </>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionToProps)
)(PhotoList);
