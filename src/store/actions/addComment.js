import { addCommentApi } from "../../services/api";
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE
} from "./actionTypes";

export const addComment = userData => async dispatch => {
  dispatch({ type: ADD_COMMENT_START });
  try {
    const data = await addCommentApi(userData);
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAILURE,
      payload: error
    });
  }
};
