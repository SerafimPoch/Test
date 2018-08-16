import React, { Fragment } from "react";
import { CommentText } from "./style";

export default ({ comment }) => {
  return (
    <Fragment>
      <CommentText>{comment.content}</CommentText>
    </Fragment>
  );
};
