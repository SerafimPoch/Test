import React from "react";
import { BlogContainer } from "./style";
import Text from "../../components/Text";
import Comments from "./Comments";

export default () => {
  return (
    <BlogContainer>
      <Text />
      <Comments />
    </BlogContainer>
  );
};
