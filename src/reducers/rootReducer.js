import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import createParcelReducer from "./createParcelReducer";

export const rootReducer = combineReducers({
  register:registerReducer,
  login:loginReducer,
  parcel:createParcelReducer
});
