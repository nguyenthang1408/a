import styled, { keyframes } from "styled-components";

export const WrapperPopular = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  margin-bottom: 300px;
}
`;

export const DivPopular = styled.div`
  height: 100%;
  width: 90%;

@media only screen and (max-width: 768px) 
{
  display: block;
 
}
`;

export const DivHeader = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`;

export const DivHeaderH1 = styled.h1`
  color: orange;


`;

export const DivHeaderSpan = styled.span`
  opacity: 0.5;
  font-size: 18px;
`;

export const DivRowCart = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  margin-top: 30px;
  flex-direction: column;
  width: auto;
}
`;

export const DivCart = styled.div`
  margin-right: 40px;
  width: 28%;
  height: 100%;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 10px;
  animation: 0.4s animate1 linear forwards;

  &:hover {
    animation: 0.4s animate linear forwards;
  }

  @keyframes animate1 {
    0% {
      box-shadow: 0 0 15px rgb(0 0 0 / 40%);
    }

    100% {
      box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    }
  }

  @keyframes animate {
    0% {
      box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    }

    100% {
      box-shadow: 0 0 15px rgb(0 0 0 / 40%);
    }


  }

@media only screen and (max-width: 768px) 
{
   width: 60%;
   height: auto;
   margin-left: 17%;
   padding-bottom: 180px;
   margin-bottom: 35px;
}
`;

export const DivCartHeader = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-around;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  height: auto;
  width: auto;
  padding-top: 25px;
  padding-bottom: 25px;
}
`;

export const DivCartHeaderSpanRight = styled.span`
  font-size: 20px;
  opacity: 0.8;
`;

export const DivCartHeaderSpanLeft = styled.span`
  font-size: 18px;
  opacity: 0.6;
`;

export const DivImg = styled.div`
  height: 50%;
  background-image: url(${(props) => props.color});
  background-size: cover;
`;

export const DivFooter = styled.div`
  height: 30%;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const DivInsideFooter = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const FooterH2 = styled.h3`
  font-weight: 700;
  opacity: 0.8;
`;

export const FooterSpan = styled.span`
  font-size: 18px;
  opacity: 0.8;
`;

export const FooterDetail = styled.span`
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  color: blue;
`;
