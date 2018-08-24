import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { CommentsContainer } from "./style";
import NewComment from "../../../components/Comments/newComment/";
import { mapStateToProps, mapDispatchToProps } from "./commentsContainer";
import ListComments from "../../../components/Comments/listComments/";

class Comments extends Component {
  componentDidMount() {
    return this.props.getComments();
  }

  postNewComment = ({ textNC }) => {
    const comment = new FormData();
    comment.append("content", textNC);
    return this.props
      .addComment(comment)
      .then(this.props.getComments())
      .then(this.props.reset());
  };

  render() {
    const {
      handleSubmit,
      comments,
      getComments,
      deleteComment,
      editComment,
      reset
    } = this.props;
    return (
      <CommentsContainer>
        <NewComment
          handleSubmit={handleSubmit}
          newComment={this.postNewComment}
        />
        <ListComments
          list={comments ? comments : null}
          handleSubmit={handleSubmit}
          reset={reset}
          getComments={getComments}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </CommentsContainer>
    );
  }
}

Comments = reduxForm({
  form: "comments"
})(Comments);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
