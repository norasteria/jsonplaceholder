import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";

import "./index.css";
import PhotoList from "./PhotoList";
import AlbumList from "./AlbumList";

class ProfileAlbum extends Component {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.path} component={AlbumList} />
        <Route path={`${this.props.match.path}/photos`} component={PhotoList} />
      </div>
    );
  }
}

export default withRouter(ProfileAlbum);
