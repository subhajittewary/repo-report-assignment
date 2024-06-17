import { combineReducers } from "redux";
import { repoReducer } from "./reducers";

const rootReducer = combineReducers({ repos: repoReducer });
export default rootReducer;