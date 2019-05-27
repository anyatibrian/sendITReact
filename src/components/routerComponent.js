import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/loginContainer";
import RegisterContainer from "../containers/registerContainer";
import NavbarComponent from "../components/navbarComponent";
import HomeContainer from "../containers/homeContainer";

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
          <Route path="/register" component={RegisterContainer} />
          <Route palth="/" component={HomeContainer} exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default RouterComponent;
