import React from "react";
import Author from "./author";
import Date from "./date";
import Comments from "./comments";
import { InfoTextBlock, InfoContainer, Line } from "./style";

export default () => {
  return (
    <InfoContainer>
      <InfoTextBlock>
        <Author />
        <Date />
        <Comments />
      </InfoTextBlock>
      <Line />
    </InfoContainer>
  );
};
