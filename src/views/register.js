import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/button";
import Input from "../components/common/input";
import { setJwt } from "../services/authService";
import * as userService from "../services/userService";

class Register extends Component {
  state = {
    data: {
      email: "",
      password: "",
      password2: "",
    },
    isLoading: false,
    errors: {},
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({
      data,
      errors: {},
    });
  };

  validate = () => {
    const errors = {};
    const { email, password, password2 } = this.state.data;
    if (email.trim() === "") errors.email = "Email cannot be empty";
    if (password.trim() === "" || password.trim().length < 8)
      errors.password = "Password must be al least 8 length long";
    if (password !== password2) errors.password2 = "Passwords doesn't match";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (Object.keys(errors || {}).length === 0) {
      try {
        this.setState({ isLoading: true });
        const response = await userService.register(this.state.data);
        localStorage.setItem("token", response.headers["x-auth-token"]);
        setJwt();
        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          this.setState({
            errors: { email: ex.response.data },
            isLoading: false,
          });
        } else if (ex.response && ex.response.status === 500) {
          this.setState({
            errors: { email: "Internal Server Error" },
            isLoading: false,
          });
        }
      }
    }
  };

  render() {
    const { data: user, errors, isLoading } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="px-6 py-3 w-full absolute transform -translate-y-1/2 top-1/2"
      >
        <h1 className="text-3xl text-center mb-4">What?Melon!</h1>
        <Input
          value={user.email}
          error={errors.email}
          onChange={this.handleChange}
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Input
          value={user.password}
          error={errors.password}
          onChange={this.handleChange}
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input
          value={user.password2}
          error={errors.password2}
          onChange={this.handleChange}
          label="Confirm password"
          name="password2"
          placeholder="Password"
          type="password"
        />
        <Button
          title={isLoading ? "Creating acccount..." : "Register"}
          iconName={isLoading ? "refresh" : "lock"}
          type="submit"
        />
        <Link to="/login">
          <p className="mt-6 text-center text-blue-500">
            Already have an acccount? Login!
          </p>
        </Link>
      </form>
    );
  }
}

export default Register;
