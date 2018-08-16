import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./editContainer";
import DelButton from "./button";

class Del extends Component {
  componentDidUpdate() {
    this.props.getComments();
  }
  deleteComment = () => {
    return this.props.deleteComment(this.props.list.id);
  };
  render() {
    return <DelButton />;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Del);
