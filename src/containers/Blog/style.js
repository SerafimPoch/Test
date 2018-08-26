import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  align-items: center;
  position: relative;
  bottom: 75px;
  margin-bottom: 200px;
  max-width: 960px;
  height: 100%;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-bottom: 50px;
  }
`;
