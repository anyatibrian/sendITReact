import React from "react";
import {shallow} from "enzyme";
import { HomeContainer }  from "../../containers/homeContainer";

let wrapper;
let instance;
let props;
describe('Home component', ()=>{
  beforeEach(()=>{
    props ={
      display:"",
      receiversName:"",
      description:"",
      pickup:"",
      destination:"",
      weight:"",
      onChange:jest.fn(),
      onSubmit:jest.fn(),
      fetchParcelOrder: jest.fn(),
      toggleButton:jest.fn(),
      createParcel: jest.fn()
    };
    wrapper = shallow(<HomeContainer {...props}/>);
    instance= wrapper.instance();
  });
  it('should render without fail',  ()=>{
    expect(wrapper).toMatchSnapshot();
  });
  it('should test the toggleButton', ()=>{
    const event = {
      preventDefault:jest.fn(),
    };
    instance.setState({display:"none"});
    instance.toggleButton(event);
    expect(instance.state.display).toBe("none");
  });
  it('should test the toggleButton', ()=>{
    const event = {
      preventDefault:jest.fn(),
    };
    instance.setState({display: "block"});
    instance.toggleButton(event);
    expect(instance.state.display).toBe("none");
  });
  it('should test the onchange method',  ()=>{
    const event ={
      preventDefault: jest.fn(),
      target:{
        name:"destination",
        value:"lira"
      }
    };
    instance.onChange(event);
    expect(instance.state.destination).toBe("lira");
  });
  it('should test test the onsubmit method ', ()=>{
    const event = {
      preventDefault:jest.fn(),
    };
    instance.onSubmit(event);
    expect(props.createParcel).toHaveBeenCalled();
  });
});