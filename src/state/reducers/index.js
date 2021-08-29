import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  bank: accountReducer,
});

export default reducers;
