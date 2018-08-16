import React from "react";
import Title from "./title";
import Content from "./form";
import SendButton from "./sendButton";
import { Form } from "./style";
import GrayLine from "../../Text/title/titleContent/line";

export default ({ handleSubmit, newComment }) => {
  return (
    <Form onSubmit={handleSubmit(newComment)}>
      <Title />
      <Content />
      <SendButton />
      <GrayLine />
    </Form>
  );
};
