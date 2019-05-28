import React from "react";
import {shallow} from "enzyme";
import {HomeComponent} from "../../components/homeComponent";

describe('LoginComponent', ()=>{
  let wrapper;
  let props ={
    toggleButton:jest.fn(),
    display:"",
    receiversName:"",
    description:"",
    pickup:"",
    weight:"",
    destination:"",
    onChange:jest.fn(),
    onSubmit:jest.fn()
  };
  beforeEach(()=>{
    wrapper = shallow(<HomeComponent {...props}/>);
  });
  it('should render without fail', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
  it("should display the module box",()=>{
    wrapper.setProps({display: "block"});
    expect(wrapper).toMatchSnapshot();
  })
});