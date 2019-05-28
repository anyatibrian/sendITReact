import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {CREAT_PARCEL_ERROR,CREAT_PARCEL, IS_LOADING} from "../../actions/typesActions";
import {createParcel} from "../../actions/createParcelActions"
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Register Actions',  ()=>{
  beforeEach(()=>{
    moxios.install();
  });
  afterEach(()=>{
    moxios.uninstall();
  });
  it('should test CREAT_PARCEL actions', ()=>{
    const payload = {
      message: 'parcel order created successfully'
    };
    moxios.wait(()=>{
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status:201,
        response:payload
      })
    });
    const expectedActions = [
      {type:IS_LOADING},
      {type:CREAT_PARCEL,
        payload:payload
      }
    ];
    const store = mockStore({});
    return store.dispatch(createParcel({
      receivers_name:"anyatibrian",
      destination:"kampala",
      description:"the best",
      pickup:"lir",
      weight:"4"
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should test CREAT_PARCEL actions', ()=>{
    const payload = {
      errors:"fields must not be empty"
    };
    moxios.wait(()=>{
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status:400,
        response:payload
      })
    });
    const expectedActions = [
      {type:IS_LOADING},
      {type:CREAT_PARCEL_ERROR,
        payload:payload
      }
    ];
    const store = mockStore({});
    return store.dispatch(createParcel({
      receivers_name:" ",
      destination:"kampala",
      description:"the best",
      pickup:"lir",
      weight:"4"
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
