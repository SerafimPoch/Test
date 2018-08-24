import React from "react";
import time from "../../../../images/time.png";
import { GrayLightText, GrayBoldText } from "../style";
import { AuthorContainer } from "../author/style";

export default () => {
  return (
    <AuthorContainer>
      <img src={time} alt="clock" className="clock" />
      <GrayLightText>Posted</GrayLightText>
      <GrayBoldText>June 18,2015 at 21:14</GrayBoldText>
    </AuthorContainer>
  );
};
