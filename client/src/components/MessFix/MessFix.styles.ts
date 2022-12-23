import styled from "styled-components";

export const ButtonMess = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 70px;
  width: 70px;
  background-color: #1da1f3;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const DivGoToTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 35px;
  width: 40px;
  height: 50px;
`;

export const GoToTop = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 50px;
  background-color: #eba62d;

  &:hover {
    background-color: orange;
  }
`;
