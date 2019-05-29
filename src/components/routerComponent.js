import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/loginContainer";
import ProtectedRoute from "./protectedRoutes/index";
import RegisterContainer from "../containers/registerContainer";
import HomeContainer from "../containers/homeContainer";

class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/register" component={RegisterContainer} />
          <ProtectedRoute palth="/" component={HomeContainer} exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default RouterComponent;
