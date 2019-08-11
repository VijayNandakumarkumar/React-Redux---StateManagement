import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  state = {};
  render() {
    if (!this.props.user) return <h4>Select User...</h4>;
    return (
      <div>
        <h1> UserDetails </h1>
        <ul>
          <li>{this.props.user.name}</li>
          <li>{this.props.user.group}</li>
          <li>{this.props.user.dob}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.active_user };
}

export default connect(mapStateToProps)(UserDetails);
