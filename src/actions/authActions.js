import axios from "axios";
import {toast} from "react-toastify"
import { SIGN_UP, SIGN_UP_ERRORS, IS_LOADING,LOGIN_ERROR,LOGIN_SUCCESS } from "./typesActions";
export const createAccount = data => async dispatch => {
  dispatch({
    type:IS_LOADING
  });
  return await axios
    .post(`https://sendit14.herokuapp.com/api/v1/auth/signup`, data)
    .then(response => {
      dispatch({
        type: SIGN_UP,
        payload: response.data
      });
      toast.dismiss();
      toast.success(`your account has been created successfully`,{
        autoClose:3000,
        hideProgressBar:false
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_UP_ERRORS,
        payload: error.response.data
      });
      toast.dismiss();
      toast.error(`${error.response.data.message}`,{
        autoClose:3000,
        hideProgressBar:false
      });
    });
};

export const loginUser = data =>async dispatch=>{
  dispatch({
    type:IS_LOADING
  });
  return await axios.post(`https://sendit14.herokuapp.com/api/v1/auth/login`, data).then(response=>{
    dispatch({
      type:LOGIN_SUCCESS,
      payload:response.data
    });
    toast.dismiss();
    toast.success('successfully logged in',{
      autoClose:3000,
      hideProgressBar:false
    })
  }
  ).catch(
      error=>{
        dispatch({
          type:LOGIN_ERROR,
          payload:error.response.data
        });
        toast.dismiss();
        toast.error(`${error.response.data.message}`,{
          autoClose:3000,
          hideProgressBar:true
        });
      }
  );
};
