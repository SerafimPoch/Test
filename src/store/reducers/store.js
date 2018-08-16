import {
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS
} from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_SUCCESS:
      return payload;
    case ADD_COMMENT_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
