import React from "react";
import Title from "./title";
import SecondTB from "./secondTextBlock";
import ThirdTB from "./thirdTextBlock/";
import { TextContainer } from "./style";

export default () => {
  return (
    <TextContainer>
      <Title />
      <SecondTB />
      <ThirdTB />
    </TextContainer>
  );
};
