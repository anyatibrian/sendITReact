import React from "react";
import { shallow } from "enzyme";
import {LoginContainer, mapStatesToProps} from "../../containers/loginContainer";

let wrapper;
let instance;
let props ={
  username:"",
  password:"",
  history:{
    push:jest.fn()
  },
  handleChange:jest.fn(),
  handleSubmit: jest.fn(),
  loginUser:jest.fn(),
  loginRedirect:false,
};
describe('Login container', ()=>{
  beforeEach(()=>{
    wrapper =  shallow(<LoginContainer {...props}/>);
    instance = wrapper.instance();
  });
  it('should render without crashing', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
  it('should test handle change method',  ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"username",
        value:"anyatibrian"
      },
    };
    instance.handleChange(event);
    expect(instance.state.username).toEqual("anyatibrian");
  });
  it('should test the handle submit method', ()=>{
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);
    expect(props.loginUser).toHaveBeenCalled();
  });
  it('should test the redirection after login', ()=>{
    wrapper.setProps({loginRedirect:true});
    expect(props.history.push).toHaveBeenCalledWith("/");
  });
  it('should test no redirection after login', ()=>{
    wrapper.setProps({loginRedirect:false});
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
  it('should test mapstatesToprops', ()=>{
    const state = {
      login:{
        loginRedirect:true
      }
    };
    expect(mapStatesToProps(state)).toEqual({
      loginRedirect:true
    });
  });
});