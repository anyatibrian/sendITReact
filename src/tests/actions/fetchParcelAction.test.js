import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {PARCEL_ORDER,PARCEL_ORDER_ERROR, IS_LOADING} from "../../actions/typesActions";
import {fetchParcelOrder} from "../../actions/fetchParcelActions";
import {Data} from "../mockdata/mockdata"
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Register Actions',  ()=> {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should test PARCEL_ORDER actions', () => {
    moxios.wait(() => {
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status: 200,
        response:Data
      });
    });
    const expectedActions = [
      {type: IS_LOADING},
      {
        type: PARCEL_ORDER,
        payload:Data
      }
    ];
    const store = mockStore({});
    return store.dispatch(fetchParcelOrder()).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });
  it('should test PARCEL_ORDER actions', () => {
    moxios.wait(() => {
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status: 400,
        response:{
          errors:"your done have any parcel orders yet"
        }
      });
    });
    const expectedActions = [
      {type: IS_LOADING},
      {
        type: PARCEL_ORDER_ERROR,
        payload:{
          errors:"your done have any parcel orders yet"
        }
      }
    ];
    const store = mockStore({});
    return store.dispatch(fetchParcelOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
