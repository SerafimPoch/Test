import React from "react";
import { LoadMoreContainer, LoadGrayLine, LoadMoreButton } from "./style";

export default ({ loadMore }) => {
  return (
    <LoadMoreContainer>
      <LoadGrayLine />
      <LoadMoreButton onClick={loadMore}>load more comments</LoadMoreButton>
      <LoadGrayLine />
    </LoadMoreContainer>
  );
};
