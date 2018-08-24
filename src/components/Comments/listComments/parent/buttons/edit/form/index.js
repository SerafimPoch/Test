import React from "react";
import { Field } from "redux-form";
import { EditFormContainer, SendButtonEdit } from "./style";

export default () => {
  return (
    <EditFormContainer>
      <Field
        component="textarea"
        name="edit"
        minLength="5"
        className="dark"
        placeholder="Your Message"
        required
      />
      <SendButtonEdit>Send</SendButtonEdit>
    </EditFormContainer>
  );
};
