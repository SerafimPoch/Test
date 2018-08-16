import { addComment } from "../../../store/actions/addComment";
import { getComments } from "../../../store/actions/getComments";

export const mapStateToProps = state => ({
  comments: state.store
});

export const mapDispatchToProps = {
  addComment,
  getComments
};
