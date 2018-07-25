import { CREATE_POST } from "./types";

import Axios, { axios } from "axios";

import { API_BASE_URL } from "../config/config";

export function createPost(postData) {
  
  const request = Axios.post(API_BASE_URL + 'post/submit', postData);
  console.log(request);

  return {
    type: CREATE_POST,
    payload: request
  }
}
