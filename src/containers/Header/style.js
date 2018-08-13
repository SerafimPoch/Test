import styled from "styled-components";
import header_image from "../../img/header.png";

export const HeaderImage = styled.div`
  background-image: url(${header_image});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1200px;
  width: 100%;
  height: 380px;

  @media (min-width: 320px) and (max-width: 768px) {
    background-size: contain;
  }
`;
