import { SIGN_UP_ERRORS, SIGN_UP, IS_LOADING } from "../actions/typesActions";
const initialState = {
  signUPSuccess: {},
  signUpError: {},
  registerRedirect:false,
  isLoading:false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signUPSuccess: action.payload,
        registerRedirect:true,
        isLoading:false
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading:true
      };
    case SIGN_UP_ERRORS:
      return {
        ...state,
        signUpError: action.payload,
        registerRedirect:false,
        isLoading:false
      };
    default:
      return state;
  }
}
