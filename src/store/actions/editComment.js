import {
  EDIT_COMMENT_START,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE
} from "./actionTypes";
import { editCommentApi } from "../../services/api";

export const editComment = (userData, id) => async dispatch => {
  dispatch({ type: EDIT_COMMENT_START });
  try {
    const data = await editCommentApi(userData, id);
    dispatch({
      type: EDIT_COMMENT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EDIT_COMMENT_FAILURE,
      payload: error
    });
  }
};
