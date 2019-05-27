import {LOGIN_ERROR,LOGIN_SUCCESS, IS_LOADING} from "../actions/typesActions";

const initialState={
  loginSuccess:{},
  loginError:{},
  loginRedirect:false,
  isLoading:false,
  isLoggedIn:false
};
export default (state=initialState, action)=>{
  switch (action.type) {
    case LOGIN_SUCCESS:
      return{
        ...state,
        loginSuccess: action.payload,
        loginRedirect: true,
        isLoading: false,
        isLoggedIn:true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isLoading:false
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading:true,
        loginRedirect:false
      };
    default:
      return state
  }
};
