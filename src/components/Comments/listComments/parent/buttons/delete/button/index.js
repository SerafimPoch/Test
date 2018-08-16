import React from "react";
import { GrayLightText } from "../../../../../../Text/info/style";
import del from "../../../../../../../images/delete.png";
import { ButtonContainer } from "../style";

export default () => {
  return (
    <ButtonContainer>
      <img src={del} alt="delete" />
      <GrayLightText>Delete</GrayLightText>
    </ButtonContainer>
  );
};
