import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/button";
import Input from "../components/common/input";
import * as auth from "../services/authService";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    isLoading: false,
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      errors: {},
    });
  };

  validate = () => {
    const errors = {};
    const { email, password } = this.state;
    if (email.trim() === "") errors.email = "Email cannot be empty";
    if (password.trim() === "" || password.trim().length < 8)
      errors.password = "Password must be al least 8 length long";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (Object.keys(errors || {}).length !== 0) return;
    try {
      this.setState({ isLoading: true });
      const { email, password } = this.state;
      await auth.login(email, password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({
          errors: { password: ex.response.data },
          isLoading: false,
        });
      } else if (ex.response && ex.response.status === 500) {
        this.setState({
          errors: { password: "Internal Server Error" },
          isLoading: false,
        });
      }
    }
  };

  render() {
    const { email, password } = this.state;
    const { errors, isLoading } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="px-6 py-3 w-full absolute transform -translate-y-1/2 top-1/2"
      >
        <h1 className="text-3xl text-center mb-4">What?Melon!</h1>
        <Input
          value={email}
          error={errors.email}
          onChange={this.handleChange}
          label="Email"
          name="email"
          placeholder="email"
          type="email"
        />
        <Input
          value={password}
          error={errors.password}
          onChange={this.handleChange}
          label="Password"
          name="password"
          placeholder="password"
          type="password"
        />
        <Button
          title={isLoading ? "Authorizing..." : "Login"}
          iconName={isLoading ? "refresh" : "lock"}
          type="submit"
        />
        <Link to="/register">
          <p className="mt-6 text-center text-blue-500">
            Don't have an acccount? Create new one!
          </p>
        </Link>
      </form>
    );
  }
}

export default Login;
