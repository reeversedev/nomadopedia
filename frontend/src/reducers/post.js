// 1. Importing the actions
// 2. Declaring the Initial states
// 3. Exporting default function for returning the state

import { CREATE_POST, GET_ALL_POSTS } from "../actions/types";

const INITIAL_STATE = {
  createPost: [],
  getAllPosts: []
};

// export default function(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     // case CREATE_POST:
//     //   return { ...state, createPost: [...state.createPost, action.payload] };
//     case CREATE_POST:
//       return { ...state, createPost: action.payload };
//     default:
//       return state;
//   }
// }

export default function(state = INITIAL_STATE, action) {
  // better to return INITAL_STATE because returning null will cause problems after getting responsse
  switch (action.type) {
    case CREATE_POST:
      return { createPost: [...state.createPost, action.payload] };
    case GET_ALL_POSTS:
      return { getAllPosts: [...state.getAllPosts, action.payload] };
    default:
      return state;
  }
}
