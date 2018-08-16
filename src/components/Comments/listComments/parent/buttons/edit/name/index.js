import React from "react";
import { NameContainer } from "../style";
import reply_right from "../../../../../../../images/reply-right.png";

export default ({ name }) => {
  return (
    <NameContainer>
      <img src={reply_right} alt="reply_right" />
      <p>{name}</p>
    </NameContainer>
  );
};
