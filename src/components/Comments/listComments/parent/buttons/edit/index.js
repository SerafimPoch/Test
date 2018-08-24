import React, { Component } from "react";
import Collapsible from "react-collapsible";
import EditButton from "./button";
import Content from "./form";

class Edit extends Component {
  edit = ({ edit }) => {
    const comment = new FormData();
    comment.append("content", edit);
    return this.props
      .editComment(comment, this.props.list.id)
      .then(this.props.getComments())
      .then(this.props.reset());
  };

  render() {
    return (
      <Collapsible trigger={<EditButton />}>
        <form onSubmit={this.props.handleSubmit(this.edit)}>
          <Content />
        </form>
      </Collapsible>
    );
  }
}

export default Edit;
