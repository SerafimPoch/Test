import React from "react";
import { TextContainer } from "./style";
import BoldText from "./boldText/";
import GrayLine from "./line/";
import Date from "./date";
import FirstTextBlock from "./text";

export default () => {
  return (
    <TextContainer>
      <BoldText />
      <GrayLine />
      <Date />
      <FirstTextBlock />
    </TextContainer>
  );
};
