import React from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Field
      component="textarea"
      name="textNC"
      minLength="5"
      className="newComment"
      placeholder="Your Message"
      required
    />
  );
};
