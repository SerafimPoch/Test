import styled from "styled-components";

export const SendButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;

export const SendButton = styled.button`
  width: 150px;
  height: 40px;
  text-align: center;
  background-color: #f1c40f;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100px;
    height: 30px;
    margin-right: 15px;
  }
`;
