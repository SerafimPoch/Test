import React from "react";
import { GrayLightText } from "../../../../../../Text/info/style";
import del from "../../../../../../../images/delete.png";
import { ButtonContainer } from "../style";

class Del extends React.Component {
  removeComment = () => {
    return this.props
      .deleteComment(this.props.id)
      .then(this.props.getComments()); //din't get id in delete response, so I can't delete it from redux store.
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
