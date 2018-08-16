import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from "./actionTypes";
import { getCommentsApi } from "../../services/api/index";

export const getComments = () => async dispatch => {
  dispatch({ type: GET_COMMENTS_START });

  try {
    const data = await getCommentsApi();
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAILURE, payload: error });
  }
};
