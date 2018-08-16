import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
`;

export const ParentCommentInfo = ParentContainer.extend`
  flex-flow: column wrap;
`;
