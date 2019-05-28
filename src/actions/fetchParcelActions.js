import axios from "axios";
import {PARCEL_ORDER,PARCEL_ORDER_ERROR,IS_LOADING} from "./typesActions";

export const fetchParcelOrder = () =>async dispatch =>{
  dispatch({
    type: IS_LOADING
  });
  return await axios.get(`https://sendit14.herokuapp.com/api/v1/parcels`, {
    headers: {
      Authorization: "Bearer " + sessionStorage.token
    }
  }).then( response=>{
      dispatch({
        type:PARCEL_ORDER,
        payload:response.data.parcel_orders
      });
  }
  ).catch(errors=>{
    dispatch({
      type:PARCEL_ORDER_ERROR,
      payload: {
        errors:"your done have any parcel orders yet"
      }
    })
  });
};