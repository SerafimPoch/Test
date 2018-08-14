import styled from "styled-components";
import road from "../../../../images/road.png";

export const RoadImage = styled.div`
  background-image: url(${road});
  background-repeat: no-repeat;
  max-width: 390px;
  width: 100%;
  height: 270px;
  position: relative;
  right: 34px;

  @media (min-width: 320px) and (max-width: 768px) {
    background-size: contain;

    right: 0px;
  }
`;
