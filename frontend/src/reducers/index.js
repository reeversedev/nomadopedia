import { combineReducers } from "redux";
import Post from "./post";

const rootReducer = combineReducers({
  createPost: Post,
  getAllPosts: Post
});

export default rootReducer;
