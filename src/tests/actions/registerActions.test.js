import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {SIGN_UP_ERRORS,SIGN_UP, IS_LOADING,LOGIN_SUCCESS,LOGIN_ERROR} from "../../actions/typesActions";
import {createAccount, loginUser} from "../../actions/authActions"
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Register Actions',  ()=>{
  beforeEach(()=>{
    moxios.install();
  });
  afterEach(()=>{
    moxios.uninstall();
  });
  it('should test user SIGN_UP actions', ()=>{
    const payload={
      message: 'your account has been created successfully'
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
      {type:SIGN_UP,
      payload:payload}
    ];
    const store = mockStore({});
    return store.dispatch(createAccount({
      username:"anyati",
      email:"anyatibrian@gmail.com",
      password:"123456789"
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should test user SIGN_UP_ERROR actions', ()=>{
    const payload={
      message: 'some fields are empty'
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
      {type:SIGN_UP_ERRORS,
        payload:payload}
    ];
    const store = mockStore({});
    return store.dispatch(createAccount({
      username:"",
      email:"",
      password:""
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
  it('should test user LOGIN_SUCCESS actions', ()=>{
    const payload={
      "access-token": sessionStorage.getItem("token")
    };
    moxios.wait(()=>{
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status:200,
        response:payload
      })
    });
    const expectedActions = [
      {type:IS_LOADING},
      {type:LOGIN_SUCCESS,
        payload:payload}
    ];
    const store = mockStore({});
    return store.dispatch(loginUser({
      username:"anyatibrian",
      password:"1234567890"
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should test user LOGIN_SUCCESS actions', ()=>{
    const payload={
      message: 'username and password does not exist'
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
      {type:LOGIN_ERROR,
        payload:payload}
    ];
    const store = mockStore({});
    return store.dispatch(loginUser({
      username:"anyaitdidi",
      password:"1234ddueueu"
    })).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  });
