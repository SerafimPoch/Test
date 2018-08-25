import React from "react";
import { BlogContainer } from "./style";
import Text from "../../components/Text";
import Comments from "./Comments";
import LoadMore from "../../components/loadMore";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./blogContainer";

const Blog = ({ loadMore }) => {
  return (
    <BlogContainer>
      <Text />
      <Comments />
      <LoadMore loadMore={loadMore} />
    </BlogContainer>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Blog);
