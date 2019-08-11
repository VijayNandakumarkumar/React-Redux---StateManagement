import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.createUsers = this.createUsers.bind(this);
  }

  createUsers() {
    if (this.props.users)
      return this.props.users.map(user => {
        if (this.props.users) {
          return (
            <li
              key={user.id}
              onClick={() => this.props.selectUser(user)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {user.name}
            </li>
          );
        } else {
          return <li>Chumma</li>;
        }
      });
    else {
      return <li>Oh no</li>;
    }
  }

  render() {
    return (
      <div>
        <h1>Came in here{this.createUsers}</h1>
        {/* <ul>{this.createUsers}</ul> */}
        <ul>{this.createUsers()}</ul>
        {/* {this.createUsers} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
