import React from "react";
import chat from "../../../../images/chat.png";
import { GrayBoldText } from "../style";
import { AuthorContainer } from "../author/style";

export default () => {
  return (
    <AuthorContainer>
      <img src={chat} alt="chat" className="chat" />
      <GrayBoldText>12 comments</GrayBoldText>
    </AuthorContainer>
  );
};
