import styled from "styled-components";

export const ChildContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const SingleComment = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
`;

export const ChildComment = ChildContainer.extend``;
