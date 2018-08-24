import React from "react";
import Avatar from "./avatar";
import NameDate from "./name_date/";
import Comment from "./comment";
import Buttons from "./buttons";
import { ParentContainer, ParentCommentInfo } from "./style";

export default ({
  list,
  getComments,
  deleteComment,
  editComment,
  handleSubmit,
  reset
}) => {
  return (
    <ParentContainer>
      <Avatar avatar={list} />
      <ParentCommentInfo>
        <NameDate name={list} />
        <Comment comment={list} />
        <Buttons
          list={list}
          getComments={getComments}
          deleteComment={deleteComment}
          editComment={editComment}
          handleSubmit={handleSubmit}
          reset={reset}
        />
      </ParentCommentInfo>
    </ParentContainer>
  );
};
