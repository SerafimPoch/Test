import React from "react";
import Edit from "./edit";
import Del from "./delete";
import { ParentContainer } from "../style";

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
      <Edit
        list={list}
        getComments={getComments}
        editComment={editComment}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <Del
        id={list.id}
        getComments={getComments}
        deleteComment={deleteComment}
      />
    </ParentContainer>
  );
};
