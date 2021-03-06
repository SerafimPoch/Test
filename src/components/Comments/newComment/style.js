import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 568px) {
    max-width: 500px;
  }
`;
