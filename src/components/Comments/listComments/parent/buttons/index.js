import React from "react";
import Edit from "./edit";
import Del from "./delete";
import { ParentContainer } from "../style";

export default ({ list, getComments, deleteComment, editComment }) => {
  return (
    <ParentContainer>
      <Edit list={list} getComments={getComments} editComment={editComment} />
      <Del
        id={list.id}
        getComments={getComments}
        deleteComment={deleteComment}
      />
    </ParentContainer>
  );
};
