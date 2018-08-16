import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { mapDispatchToProps } from "./editContainer";
import EditButton from "./button";
import Content from "./form";

// I know that is wrong to connect  store in component, sorry for that

class Edit extends Component {
  componentDidUpdate() {
    this.props.getComments();
  }
  editComment = ({ edit }) => {
    const comment = new FormData();
    comment.append("content", edit);

    return this.props.editComment(comment, this.props.list.id);
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

export default connect(
  null,
  mapDispatchToProps
)(Edit);
