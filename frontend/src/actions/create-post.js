import { CREATE_POST } from "./types";

import { axiosNoAuth } from "../config/axios-instances";

import { API_BASE_URL } from "../config/config";

export function createPost(postData, successCallBack) {
  return async function(dispatch) {
    try {
      const response = await axiosNoAuth.post(
        API_BASE_URL + "post/submit",
        postData
      );
      successCallBack && successCallBack();
      await dispatch({ type: CREATE_POST, payload: response });
    } catch (e) {
      console.log(e);
    }
  };
}
