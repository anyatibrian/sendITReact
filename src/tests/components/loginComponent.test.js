import React from "react";
import {shallow} from "enzyme";
import {LoginComponent} from "../../components/loginComponent";

let wrapper;
let props = {
  username:"",
  password:"",
  handleChange:jest.fn(),
  handleSubmit:jest.fn(),
  isLoading:""
};
describe('LoginComponent', ()=>{
  beforeEach(()=>{
    wrapper = shallow(<LoginComponent {...props}/>);
  });
  it('should render without crashing', ()=>{
    wrapper.setProps({isLoading:"loading"});
    expect(wrapper).toMatchSnapshot();
  });
});
