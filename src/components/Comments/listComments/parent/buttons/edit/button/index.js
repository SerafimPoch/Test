import React from "react";
import { GrayLightText } from "../../../../../../Text/info/style";
import edit from "../../../../../../../images/edit.png";
import { ButtonContainer } from "../style";

export default () => {
  return (
    <ButtonContainer>
      <img src={edit} alt="edit" />
      <GrayLightText>Edit</GrayLightText>
    </ButtonContainer>
  );
};
