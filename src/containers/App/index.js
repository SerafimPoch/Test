import React from "react";
import { Container } from "./style";
import Header from "../Header";
import Blog from "../Blog/";

export default () => {
  return (
    <Container>
      <Header />
      <Blog />
    </Container>
  );
};
