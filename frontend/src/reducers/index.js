import { combineReducers } from "redux";
import createPost from "./create-post";

const rootReducer = combineReducers({
  createPost: createPost
});

export default rootReducer;
