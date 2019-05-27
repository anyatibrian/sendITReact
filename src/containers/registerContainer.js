import React, { Component } from "react";
import RegisterComponent from "../components/registerComponent";
import {connect} from "react-redux";
import {createAccount} from "../actions/authActions";
import {validEmailRegex} from "../utilites/Regexs";
import "../sass/login.scss";

export class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      hidden: true,

    };
  }
  componentWillReceiveProps = (nextProps)=>{
    if(nextProps.registerRedirect===true){
      const {history}= this.props;
      history.push("/login");
    }
  };
  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let { errors } = this.state;

    switch (name) {
      case "username":
        errors.username =
          value.length < 6
            ? "your username should be atleast six characters"
            : "";
        break;
      case "email":
        errors.email = !validEmailRegex.test(value)
          ? "invalid email address"
          : "";
        break;
      case "password":
        errors.password =
          value.length < 6
            ? "your password must be atleast six charactors"
            : "";
        break;
      case "confirmPassword":
        if (value !== this.state.password) {
          errors.confirmPassword = "your passwords does not match";
        } else {
          errors.confirmPassword = "";
        }
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
      const {createAccount} = this.props;
      const {username,password, email} = this.state;
      const data = {
        username:username,
        email:email,
        password:password
      };
    createAccount(data);
  };
  onToggle = () => {
    this.setState({ hidden: !this.state.hidden });
  };
  render() {
    const {
      username,
      password,
      email,
      confirmPassword,
      hidden,
      errors
    } = this.state;
    const {isLoading} = this.props;
    return (
      <div>
        <RegisterComponent
          username={username}
          password={password}
          email={email}
          confirmPassword={confirmPassword}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          hidden={hidden}
          onToggle={this.onToggle}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    );
  }
}
export const mapStateToProps =state=>({
  signUPSuccess: state.register.signUPSuccess,
  signUpError:state.register.signUpError,
  registerRedirect:state.register.registerRedirect,
  isLoading:state.register.isLoading
});
export default connect(mapStateToProps, {createAccount}) (RegisterContainer);
