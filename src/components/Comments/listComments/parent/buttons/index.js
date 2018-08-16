import React from "react";
import Edit from "./edit";
import { ParentContainer } from "../style";

export default ({ list }) => {
  return (
    <ParentContainer>
      <Edit list={list} />
    </ParentContainer>
  );
};
