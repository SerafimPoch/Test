import styled from "styled-components";

export const SecondTBContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;
    align-items: center;
  }
`;
