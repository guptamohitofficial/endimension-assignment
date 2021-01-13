import React, { Component } from "react";
import { cookies } from "../non-components/easy";
import PrivateHeader from "./Headers";
import { Route, Switch } from "react-router-dom";
import Logout from "./Logout";
import LandingPage from "./LandingPage";
import Door from "./body/Door";

export default class Page extends Component {
  render() {
    return (
      <div>
        {cookies.get("token") ? (
          <div>
            <PrivateHeader />
            <Switch>
              <Route exact={true} path={"/logout"} component={Logout} />
              <Route path={"/"} component={Door} />
            </Switch>
          </div>
        ) : (
          <LandingPage />
        )}
      </div>
    );
  }
}
