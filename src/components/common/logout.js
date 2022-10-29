import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import * as auth from "../../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
  }
  render() {
    return <Navigate to="/login" />;
  }
}

export default Logout;
