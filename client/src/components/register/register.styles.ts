import styled from "styled-components";

export const DivRegister = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  background-image: url("src/assets/rg.jpg");
  opacity: 0.9;
  margin-top: 50px;

@media only screen and (max-width: 768px) 
{
  margin-bottom: 0px;
  margin-top: 0px;
}
`;

export const DivHeaderRegister = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterH1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  color: white;
  z-index: 100;
`;

export const RegisterSpan = styled.span`
  font-size: 25px;
  color: white;
`;

export const DivInput = styled.div`
  margin-top: 50px;
  height: 60px;
  border-radius: 100px;
  background-color: white;
  width: 35%;
  position: relative;

@media only screen and (max-width: 768px) 
{
  width: 90%;
}
`;

export const DivFont = styled.div`
  height: 20px;
  width: 45%;
  display: flex;
  position: absolute;
  top: 22px;
  left: 40px;
  opacity: 0.6;
`;

export const Input = styled.input`
  position: absolute;
  height: 30px;
  left: 30px;
  top: -8px;
  width: 100%;
  border: none;
  font-size: 20px;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ButtonRegister = styled.button`
  position: absolute;
  float: right;
  height: 50px;
  width: 33%;
  left: 66%;
  border: none;
  border-radius: 100px;
  top: 5px;
  background-color: #eba62d;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
