import { combineReducers } from "redux";
import { dataReducer } from "./reducerData";

export const rootReducer = combineReducers({
  dataReducer,
});
