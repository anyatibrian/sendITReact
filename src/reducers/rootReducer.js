import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import createParcelReducer from "./createParcelReducer";
import fetchParcelReducer from "./fetchParcelReducer";

export const rootReducer = combineReducers({
  register:registerReducer,
  login:loginReducer,
  parcel:createParcelReducer,
  parcelOrder: fetchParcelReducer
});