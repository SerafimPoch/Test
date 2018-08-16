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

  componentDidUpdate() {
    return this.props.getComments();
  }

  postNewComment = ({ textNC }) => {
    const comment = new FormData();
    comment.append("content", textNC);
    return this.props.addComment(comment);
  };

  editComment = () => {};

  render() {
    const { handleSubmit, comments } = this.props;
    return (
      <CommentsContainer>
        <NewComment
          handleSubmit={handleSubmit}
          newComment={this.postNewComment}
        />
        <ListComments list={comments ? comments : null} />
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
