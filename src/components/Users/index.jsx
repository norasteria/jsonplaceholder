import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import "./index.css";
import Title from "../common/pageTitle";
import { fetchUsersList } from "./users.action";
import { usersList as selectUserList } from "./users.selector";

const { Panel } = Collapse;

const mapActionToProps = { fetchUsersList };

const mapStateToProps = (state) => ({
  userList: selectUserList(state),
});

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }

  goToProfile = () => {
    return <a href="/profile">Go to profile</a>;
  };

  panelMapRender = (user, index) => (
    <Panel header={user.name} key={index} extra={this.goToProfile()}>
      <p>
        <UserOutlined title="Username" className="user-list-icon" />
        {user.username} <br />
        <MailOutlined title="Email" className="user-list-icon" />
        {user.email} <br />
        <PhoneOutlined title="Phone number" className="user-list-icon" />
        {user.phone} <br />
        <GlobalOutlined title="Website" className="user-list-icon" />
        {user.website}
      </p>
    </Panel>
  );

  render() {
    return (
      <div>
        <Title>User List</Title>
        <Collapse bordered={false}>
          {this.props.userList.map(this.panelMapRender)}
        </Collapse>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Users);
