import { combineReducers } from "redux";
import { userReducer } from "./reducer/userReducer";
import articleReducer from "./reducer/articleReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});
