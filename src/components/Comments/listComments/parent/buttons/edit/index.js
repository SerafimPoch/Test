import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { reduxForm } from "redux-form";
import EditButton from "./button";
import Content from "./form";

class Edit extends Component {
  editComment = ({ edit }) => {
    const comment = new FormData();
    comment.append("content", edit);

    return this.props
      .editComment(comment, this.props.list.id)
      .then(this.props.getComments());
  };

  render() {
    return (
      <Collapsible trigger={<EditButton />}>
        <form onSubmit={this.props.handleSubmit(this.editComment)}>
          <Content />
        </form>
      </Collapsible>
    );
  }
}

Edit = reduxForm({
  form: "edit"
})(Edit);

export default Edit;
