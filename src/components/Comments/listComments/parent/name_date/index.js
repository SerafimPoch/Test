import React from "react";
import { Name, NameContainer } from "./style";
import time from "../../../../../images/time.png";
import { GrayLightText } from "../../../../Text/info/style";

export default ({ name }) => {
  return (
    <NameContainer>
      <Name>{name.author.name}</Name>
      <img src={time} alt="time" />
      <GrayLightText>{name.created_at}</GrayLightText>
    </NameContainer>
  );
};
