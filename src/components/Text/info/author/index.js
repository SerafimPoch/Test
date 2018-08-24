import React from "react";
import { GrayLightText, GrayBoldText } from "../style";
import { AuthorContainer } from "./style";
import user from "../../../../images/user.png";

export default () => {
  return (
    <AuthorContainer>
      <img src={user} alt="user" className="user" />
      <GrayLightText>Post by </GrayLightText>
      <GrayBoldText>Will Smith</GrayBoldText>
    </AuthorContainer>
  );
};
