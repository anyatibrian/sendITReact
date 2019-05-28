import {IS_LOADING, PARCEL_ORDER, PARCEL_ORDER_ERROR} from "../actions/typesActions";
const initialState ={
  isLoading:false,
  parcelOrders:[],
  parcelErrors:{}
};

export default (state=initialState,action)=>{
  switch (action.type) {
    case PARCEL_ORDER:
      return{
        ...state,
        parcelOrders: action.payload,
        isLoading: false
      };
    case PARCEL_ORDER_ERROR:
      return {
        ...state,
        parcelErrors: action.payload,
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