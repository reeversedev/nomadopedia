import { CREATE_POST, GET_ALL_POSTS } from "./types";

import Axios, { axios } from "axios";

import { API_BASE_URL } from "../config/config";

export function createPost(postData) {
  const request = Axios.post(API_BASE_URL + "post/submit", postData);
  return {
    type: CREATE_POST,
    payload: request
  };
}
export function getAllPosts() {
  const request = Axios.get(API_BASE_URL + "post/getAllPosts");
  return {
    type: GET_ALL_POSTS,
    payload: request
  };
}
