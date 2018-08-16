import React, { Fragment } from "react";
import {
  ListCommentsContainer,
  UserCommentContainer,
  ChildContainer
} from "./style";
import Parent from "./parent";
import Child from "./child";

export default ({ list }) => {
  return (
    <Fragment>
      {list.map((element, id) => {
        return (
          <ListCommentsContainer key={element.id}>
            <UserCommentContainer key={element.id}>
              <Parent list={element} />
            </UserCommentContainer>
            <ChildContainer key={id}>
              {element.children === [] ? null : <Child list={element} />}
            </ChildContainer>
          </ListCommentsContainer>
        );
      })}
    </Fragment>
  );
};
