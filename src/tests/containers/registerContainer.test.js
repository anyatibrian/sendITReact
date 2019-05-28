import React from "react";
import {shallow} from "enzyme";
import {RegisterContainer, mapStateToProps} from "../../containers/registerContainer";

describe('Register container',  ()=>{
  let wrapper;
  let instance;
  let props={
    username:"",
    email:"",
    password:"",
    errors:{
      username:"",
      email:"",
      password: ""
    },
    hidden:true,
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    onToggle:jest.fn(),
    createAccount:jest.fn(),
    history:{push:jest.fn()},
    registerRedirect:false
  };
  beforeEach(()=>{
    wrapper = shallow(<RegisterContainer {...props}/>);
    instance = wrapper.instance()
  });
  it('should render without crashing ', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
  it('should test onchange method for wrong username', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"username",
        value:"anya"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.username).
    toEqual("your username should be atleast six characters")
  });
  it('should test onchange method for correct username', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"username",
        value:"anyatibrian"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.username).
    toEqual("")
  });
  it('should test onchange method for wrong email', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"email",
        value:"anyatibrian."
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.email).
    toEqual("invalid email address");
  });
  it('should test onchange method for correct email', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"email",
        value:"anyatibrian@gmail.com"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.email).
    toEqual("");
  });
  it('should test onchange method for wrong password', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"password",
        value:"133"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.password).
    toEqual("your password must be atleast six charactors");
  });
  it('should test onchange method for correct password', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"password",
        value:"13356788"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.password).
    toEqual("");
  });
  it('should test onchange method for match password error', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"confirmPassword",
        value:"1234567890"
      }
    };
    instance.onChange(event);
    instance.setState({password:"1234"});
    expect(instance.state.errors.confirmPassword).
    toEqual("your passwords does not match");
  });
  it('should test onchange method for match password', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"confirmPassword",
        value:"1234567890"
      }
    };
    instance.setState({password:"1234567890"});
    instance.onChange(event);
    expect(instance.state.errors.confirmPassword).
    toEqual("");
  });
  it('should test default state method for match password', ()=>{
    const event = {
      preventDefault:jest.fn(),
      target:{
        name:"defaultnow",
        value:"1234567890"
      }
    };
    instance.onChange(event);
    expect(instance.state.errors.confirmPassword).
    toEqual("");
  });
  it('should test onsubmit method of the container', ()=>{
    const event = {
      preventDefault:jest.fn()
    };
    instance.onSubmit(event);
    expect(props.createAccount).toHaveBeenCalled();
  });
  it('should test ontoggle method of the container', ()=>{
    instance.onToggle();
    expect(instance.state.hidden).toEqual(false);
  });
  it('should test redirect on  method of the container', ()=>{
    wrapper.setProps({registerRedirect:true});
   expect(props.history.push).toHaveBeenCalledWith('/login');
  });
  it('should test fail redirect   method of the container', ()=>{
    wrapper.setProps({registerRedirect:false});
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
  it('should map state to props', ()=> {
    const state={
      register:{
        isLoading:true
      }
    };
    expect(mapStateToProps(state)).toEqual({isLoading:true})
  });
});