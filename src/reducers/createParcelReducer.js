import {CREAT_PARCEL,CREAT_PARCEL_ERROR,IS_LOADING} from "../actions/typesActions";
const initialState = {
  created:{},
  creationError:{},
  isLoading:false
};
export default (state=initialState,action)=>{
  switch(action.type) {
    case CREAT_PARCEL:
      return{
        ...state,
        isLoading:false,
        created: action.payload,
      };
    case CREAT_PARCEL_ERROR:
      return {
        ...state,
        creationError: action.payload,
        isLoading:false
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading:true
      };
    default:
      return state
  }
};