import React from "react";
import { LoadMoreContainer, LoadGrayLine, LoadMoreButton } from "./style";

class LoadMore extends React.Component {
  componentDidUpdate() {
    return this.props.getComments();
  }
  render() {
    return (
      <LoadMoreContainer>
        <LoadGrayLine />
        <LoadMoreButton onClick={this.props.loadMore}>
          load more comments
        </LoadMoreButton>
        <LoadGrayLine />
      </LoadMoreContainer>
    );
  }
}

export default LoadMore;
