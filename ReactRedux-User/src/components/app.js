import React, { Component } from 'react';
import UserList from './../containers/user_list';
import UserDetail from './../containers/user_detail';
const flexStyle = {
  display: "flex",
  flexWrap: "wrap"
}
export default class App extends Component {
  render() {
    return (
      <div className="row" style={flexStyle}>
        <UserList className="col l6" />
        <UserDetail className="col l6" />
      </div>
    );
  }
}
