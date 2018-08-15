import { post, get } from "./methods";

export const addCommentApi = userData => {
  return post(userData);
};

export const getCommentsApi = () => {
  return get();
};
