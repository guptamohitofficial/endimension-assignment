import React, { Component } from "react";
import ApiCalls, { cookies } from "../non-components/easy";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      btnMsg: "Sign In",
      btnColor: "primary"
    };
  }
  handleLogin = e => {
    e.preventDefault();
    ApiCalls.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        if (response.data["valid"]) {
          this.setState({ btnMsg: "Sign In Success", btnColor: "success" });
          cookies.set("token", response.data["token"], { path: "/" });
          setTimeout(() => {
            window.location.href = "/";
          }, 200);
        } else this.setState({ btnMsg: "Sign In Failed", btnColor: "danger" });
      })
      .catch(e => {
        this.setState({ btnMsg: "Sign In Failed", btnColor: "danger" });
      });
  };
  handleInputs = event => {
    this.setState({ btnMsg: "Sign In", btnColor: "primary" });
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div
        style={{
          height: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: " 40px",
          paddingBottom: "40px",
          backgroundColor: "#f5f5f5"
        }}
      >
        <form onSubmit={this.handleLogin} className="form-signin mt-5 py-5">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Credentials</h1>
            <div>Doctor Username : doc1</div>
            <div>Doctor Username : doc2</div>
            <div>Hospital Username : hos</div>
            <div>All Passwords : mohit</div>
          </div>

          <div className="form-label-group">
            <input
              style={{
                height: "50px"
              }}
              type="text"
              id="inoutUsername"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={this.handleInputs}
              required
              autoFocus
            />
            <label htmlFor="inoutUsername">Username</label>
          </div>

          <div className="form-label-group">
            <input
              style={{
                height: "50px"
              }}
              type="password"
              id="inputPassword"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleInputs}
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <button
            type="submit"
            className={`btn btn-lg btn-${this.state.btnColor} btn-block`}
          >
            {this.state.btnMsg}
          </button>
          <p className="mt-5 mb-3 text-muted text-center">
            Sample to <b>Endimension</b> by{" "}
            <a href="https://mohit.worksnet.in"> Mohit Gupta</a>
          </p>
        </form>
      </div>
    );
  }
}
