import React from "react";
import {shallow} from "enzyme";
import ParcelListComponent from "../../components/parcelListComponent";

let wrapper;
let props = {
  parcelOrder:{map:jest.fn()}
};
describe('parcel list component', ()=>{
  beforeEach(()=>{
    wrapper = shallow(<ParcelListComponent {...props}/>)
  });
  it('should render without fail', ()=> {
    expect(wrapper).toMatchSnapshot();
  });
});