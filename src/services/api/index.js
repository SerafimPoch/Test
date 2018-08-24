import { post, get, put, del } from "./methods";

export const addCommentApi = userData => {
  return post(userData);
};

export const getCommentsApi = () => {
  return get();
};

export const editCommentApi = (userData, id) => {
  return put(userData, id);
};

export const deleteCommentApi = id => {
  return del(id);
};
