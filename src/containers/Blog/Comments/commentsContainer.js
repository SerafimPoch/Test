import { addComment } from "../../../store/actions/addComment";
import { getComments } from "../../../store/actions/getComments";
import { deleteComment } from "../../../store/actions/deleteComment";
import { editComment } from "../../../store/actions/editComment";

export const mapStateToProps = state => ({
  comments: state.store
});

export const mapDispatchToProps = {
  addComment,
  getComments,
  deleteComment,
  editComment
};
