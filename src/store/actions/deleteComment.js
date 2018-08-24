import { DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from "./actionTypes";
import { deleteCommentApi } from "../../services/api/";

export const deleteComment = id => async dispatch => {
  dispatch({ type: DELETE_START });
  try {
    const data = await deleteCommentApi(id);
    dispatch({
      type: DELETE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: DELETE_FAILURE,
      payload: error
    });
  }
};
