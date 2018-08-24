import React from "react";
import { ButtonContainer } from "../style";
import del from "../../../../../../../images/delete.png";
import { GrayLightText } from "../../../../../../Text/info/style";

class Del extends React.Component {
  removeComment = () => {
    return this.props
      .deleteComment(this.props.id)
      .then(this.props.getComments()); //din't get id in delete response, so I can't filter from redux store directly.
  };
  render() {
    return (
      <ButtonContainer onClick={this.removeComment}>
        <img src={del} alt="delete" />
        <GrayLightText>Delete</GrayLightText>
      </ButtonContainer>
    );
  }
}

export default Del;
