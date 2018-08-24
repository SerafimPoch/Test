import {
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  LOAD_MORE_SUCCESS
} from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_SUCCESS:
      return payload;
    case ADD_COMMENT_SUCCESS:
      return [...state, payload];
    case LOAD_MORE_SUCCESS:
      return payload;
    default:
      return state;
  }
};
