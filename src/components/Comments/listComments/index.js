import React from "react";
import {
  ListCommentsContainer,
  UserCommentContainer,
  ChildContainer
} from "./style";
import Parent from "./parent";
import Child from "./child";

export default ({ list, getComments, deleteComment, editComment }) => {
  return (
    <ListCommentsContainer>
      {list.map((element, id) => {
        return (
          <div key={id}>
            <UserCommentContainer key={element.id}>
              <Parent
                list={element}
                getComments={getComments}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            </UserCommentContainer>
            <ChildContainer key={id}>
              {element.children === [] ? null : <Child list={element} />}
            </ChildContainer>
          </div>
        );
      })}
    </ListCommentsContainer>
  );
};
