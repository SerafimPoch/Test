import styled from "styled-components";

export const ListCommentsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-bottom: 20px;
  }
`;

export const UserCommentContainer = styled.div`
  display: flex;
`;

export const ChildContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
