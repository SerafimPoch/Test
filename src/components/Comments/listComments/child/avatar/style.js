import styled from "styled-components";

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 30px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-right: 10px;
    max-width: 60px;
    max-height: 60px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 10px;
  }
`;
