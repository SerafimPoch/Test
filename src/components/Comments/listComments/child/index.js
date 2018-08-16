import React from "react";
import { ChildContainer, SingleComment, ChildComment } from "./style";
import Avatar from "./avatar";
import Name from "./name_date";
import Comment from "./comment";

export default ({ list }) => {
  return (
    <ChildContainer>
      {list.children
        ? list.children.map(element => {
            return (
              <SingleComment key={element.id}>
                <Avatar avatar={element} />
                <ChildComment key={element.id}>
                  <Name name={element} />
                  <Comment comment={element} />
                </ChildComment>
              </SingleComment>
            );
          })
        : null}
    </ChildContainer>
  );
};
