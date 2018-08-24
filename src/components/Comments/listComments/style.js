import styled from "styled-components";

export const ListCommentsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-bottom: 0px;
  }
`;

export const UserCommentContainer = styled.div`
  display: flex;
`;

export const ChildContainer = styled.div`
  display: flex;
  margin-left: 110px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 0px;
  }
`;
