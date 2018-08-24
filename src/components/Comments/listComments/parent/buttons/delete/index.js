import React from "react";
import DelButton from "./button";

export default ({ deleteComment, id, getComments }) => {
  return (
    <DelButton
      delet={deleteComment}
      id={id}
      getComments={getComments}
      deleteComment={deleteComment}
    />
  );
};
