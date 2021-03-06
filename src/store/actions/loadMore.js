import {
  LOAD_MORE_START,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAILURE
} from "./actionTypes";
import { loadMoreApi } from "../../services/api/index";

export const loadMore = () => async dispatch => {
  dispatch({ type: LOAD_MORE_START });
  try {
    const data = await loadMoreApi();
    dispatch({ type: LOAD_MORE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_MORE_FAILURE, payload: error });
  }
};
