import React from "react";
import {shallow} from "enzyme";
import RegisterComponent from "../../components/registerComponent";

describe('test registerComponent',  ()=>{
  let wrapper;
  let props={
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    errors:{
      username:"",
      email:"",
      password:"",
      confirmPassword:""
    },
    onSubmit:jest.fn(),
    onChange:jest.fn(),
    onToggle: jest.fn(),
    isLoading:true,
    hidden:false,
  };
  beforeEach(()=>{
    wrapper = shallow(<RegisterComponent {...props}/>);
  });
  it('should render without crashing', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
});
