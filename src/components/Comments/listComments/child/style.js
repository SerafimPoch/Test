import styled from "styled-components";

export const ChildContainer = styled.div`
  display: flex;
  flex-flow: column wrap;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 30px;
  }
`;

export const SingleComment = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-bottom: 10px;
  }
`;

export const ChildComment = ChildContainer.extend`
  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 0px;
  }
`;
