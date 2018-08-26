import styled from "styled-components";
import { GrayLine } from "../Text/title/titleContent/line/style";

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

export const LoadGrayLine = GrayLine.extend`
  width: 30%;
`;

export const LoadMoreButton = styled.button`
  width: 20%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  color: #c5c5c5;
  outline: none;
  cursor: pointer;
  font-size: 14px;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100%;
    height: 100%;
  }
`;
