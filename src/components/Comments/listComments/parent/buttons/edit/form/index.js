import React from "react";
import { Field } from "redux-form";
import { EditFormContainer } from "./style";
import SendButton from "../../../../../newComment/sendButton";

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
      <div className="editSend">
        <SendButton>Send</SendButton>
      </div>
    </EditFormContainer>
  );
};
