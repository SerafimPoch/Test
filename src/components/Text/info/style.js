import styled from "styled-components";
import { GrayLine } from "../title/titleContent/line/style";

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const InfoTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 46px;
  width: 70%;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const GrayLightText = styled.p`
  font-size: 16px;
  color: #c5c5c5;
  margin-left: 5px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 10px;
  }
`;

export const GrayBoldText = GrayLightText.extend`
  font-weight: bold;
`;

export const Line = GrayLine.extend`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 46px;
  width: 95%;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
