import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { CommentsContainer } from "./style";
import NewComment from "../../../components/Comments/newComment/";
import { mapDispatchToProps } from "./commentsContainer";
import { getCommentsApi } from "../../../services/api";

class Comments extends Component {
  componentDidMount() {
    console.log(getCommentsApi());
  }

  postNewComment = ({ textNC }) => {
    const cradentials = new FormData();
    cradentials.append("content", textNC);
    return this.props.addComment(cradentials);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <CommentsContainer>
        <NewComment
          handleSubmit={handleSubmit}
          newComment={this.postNewComment}
        />
      </CommentsContainer>
    );
  }
}

Comments = reduxForm({
  form: "comments"
})(Comments);

export default connect(
  null,
  mapDispatchToProps
)(Comments);
