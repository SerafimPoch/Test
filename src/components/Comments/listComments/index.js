import React from "react";
import { ListCommentsContainer, UserCommentContainer } from "./style";
import Parent from "./parent";

export default ({ list }) => {
  return (
    <ListCommentsContainer>
      {list.map(element => {
        return (
          <UserCommentContainer key={element.id}>
            <Parent list={element} />
          </UserCommentContainer>
        );
      })}
    </ListCommentsContainer>
  );
};
