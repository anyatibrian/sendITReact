import React, { Component } from "react";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import { LoginComponent } from "../components/loginComponent";
import "../sass/login.scss";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.loginRedirect===true){
      const {history} = this.props;
      history.push("/");
    }
  }

  handleChange=event=>{
    event.preventDefault();
    const {name, value}= event.target;
    this.setState({[name]:value});
  };
  handleSubmit=event=>{
    event.preventDefault();
    const {username, password } = this.state;
    const {loginUser}= this.props;
    const data = {
      username:username,
      password:password
    };
    loginUser(data);
  };
  render() {
    const { username, password } = this.state;
    //sessionStorage.setItem("token",this.props.loginSuccess["access-token"]);
    const {isLoading} = this.props;
    return (
      <div className="">
        <LoginComponent
            username={username}
            password={password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            isLoading={isLoading}
        />
      </div>
    );
  }
}
export const mapStatesToProps=state=>({
  isLoading:state.login.isLoading,
  loginSuccess:state.login.loginSuccess,
  loginError:state.login.loginError,
  loginRedirect:state.login.loginRedirect
});
export default connect(mapStatesToProps, {loginUser}) (LoginContainer);
