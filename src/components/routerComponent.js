import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/loginContainer";
import NavbarComponent from "../components/navbarComponent";
import RegisterContainer from "../containers/registerContainer";
class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent/>
        <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/register" component={RegisterContainer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default RouterComponent;