import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Divider, Spin } from "antd";

import Title from "../common/pageTitle";
import Posts from "./ProfilePosts";
import Album from "./ProfileAlbum";
import { fetchSelectedUserDetail } from "./profile.action";
import {
  userProfileLoading as selectLoading,
  userProfileData as selectUserDetail,
} from "./profile.selector";

const { TabPane } = Tabs;

const mapActionToProps = { fetchSelectedUserDetail };

const mapStateToProps = (state) => ({
  userProfile: selectUserDetail(state),
  mainPageLoading: selectLoading(state),
});

class Profile extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.fetchSelectedUserDetail({ id: userId });
  }

  infoRender = () => {
    const { userProfile } = this.props;

    return (
      <div>
        <h3>{userProfile.name}</h3>
        <div>Email: {userProfile.email}</div>
        <div>Phone number: {userProfile.phone}</div>
      </div>
    );
  };

  render() {
    const InfoRender = this.infoRender;

    return (
      <div>
        <Title>Profile</Title>
        <Spin spinning={this.props.mainPageLoading}>
          <Divider orientation="left">Info</Divider>
          <InfoRender />

          <Tabs>
            <TabPane tab="Posts" key={1}>
              <Posts />
            </TabPane>

            <TabPane tab="Album" key={2}>
              <Album />
            </TabPane>
          </Tabs>
        </Spin>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Profile);
