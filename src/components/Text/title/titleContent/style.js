import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 20px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 0px;
  }
`;
