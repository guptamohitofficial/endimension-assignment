import React, { Component } from "react";
import ApiCalls from "../../non-components/easy";
import { Switch, Route } from "react-router-dom";
import Doctor from "./Doctor";
import Hospital from "./Hospital";
import Record from "./Record";

export default class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: ""
    };
  }
  componentDidMount() {
    ApiCalls.postCall("get-user").then(response => {
      if (response.data["valid"]) {
        this.setState({ user: response.data["user"], loaded: true });
        if (response.data["user"]["last_name"] === "doctor")
          this.props.history.push("/doctor");
        else if (response.data["user"]["last_name"] === "hospital") {
          this.props.history.push("/hospital");
        }
      }
    });
  }

  render() {
    return (
      <div className="mt-5 container">
        {this.state.loaded ? (
          <div>
            <div className="mt-5">
              <Switch>
                <Route
                  exact={true}
                  path="/doctor"
                  component={props => {
                    return <Doctor {...props} user={this.state.user} />;
                  }}
                />
                <Route
                  exact={true}
                  path="/hospital"
                  component={props => {
                    return <Hospital {...props} user={this.state.user} />;
                  }}
                />
                <Route
                  exact={true}
                  path="/record/:id"
                  component={props => {
                    return <Record {...props} user={this.state.user} />;
                  }}
                />
              </Switch>
            </div>
          </div>
        ) : (
          <div className="linePreloader-green"></div>
        )}
      </div>
    );
  }
}
