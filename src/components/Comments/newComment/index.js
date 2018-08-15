import React from "react";
import Title from "./title";
import Content from "./form";
import SendButton from "./sendButton";
import { Form } from "./style";

export default ({ handleSubmit, newComment }) => {
  return (
    <Form onSubmit={handleSubmit(newComment)}>
      <Title />
      <Content />
      <SendButton />
    </Form>
  );
};
