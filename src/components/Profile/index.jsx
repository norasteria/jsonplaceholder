import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Divider, Spin } from "antd";

import Title from "../common/pageTitle";
import Posts from "./ProfilePosts";
import Galery from "./ProfileGalery";
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

  onTabClick = (profileContet) => {
    const { userId } = this.props.match.params;
    this.props.history.push(`/profile/${userId}/${profileContet}`);
  };

  render() {
    const InfoRender = this.infoRender;
    const { profileContent } = this.props.match.params;

    return (
      <div>
        <Title>Profile</Title>
        <Spin spinning={this.props.mainPageLoading}>
          <Divider orientation="left">Info</Divider>
          <InfoRender />

          <Tabs activeKey={profileContent} onTabClick={this.onTabClick}>
            <TabPane tab="Posts" key="posts">
              <Posts />
            </TabPane>

            <TabPane tab="Galery" key="galery">
              <Galery />
            </TabPane>
          </Tabs>
        </Spin>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Profile);
