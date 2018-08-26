import styled from "styled-components";

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-right: 10px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 14px;
  }
`;
