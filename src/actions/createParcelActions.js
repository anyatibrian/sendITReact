import axios from "axios";
import {toast} from "react-toastify";
import {CREAT_PARCEL,CREAT_PARCEL_ERROR,IS_LOADING} from "./typesActions";

export const createParcel=data=>async dispatch=>{
  console.log("actions");
  dispatch({
    type:IS_LOADING,
  });
  return await axios.post(`https://sendit14.herokuapp.com/api/v1/parcels`,
    data,
      {
        headers: {
          Authorization: "Bearer " + sessionStorage.token
        }
      }
      ).then(

      response=>{
        dispatch({
          type:CREAT_PARCEL,
          payload:response.data.message
        }
        );
        toast.dismiss();
        toast.success(`${response.data.message}`,{
          autoClose:3000,
          hideProgressBar:false
        });
      }
  ).catch(
      errors=>{
        dispatch({
          type:CREAT_PARCEL_ERROR,
          payload:errors.response.data.errors
        });
        toast.dismiss();
        toast.success(`${errors.response.data.errors}`,{
          autoClose:3000,
          hideProgressBar:false
        });
      }
  );

};
