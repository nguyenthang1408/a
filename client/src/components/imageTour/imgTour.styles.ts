import styled from "styled-components";

export const WrapperImgTour = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80rem;
  width: 100%;

@media only screen and (max-width: 768px) 
{
  margin-top: 100px;
  height: auto;
}
`;

export const TitleImgTour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  height: 20%;
  width: 100%;
`;

export const TitleH1 = styled.h1`
  color: orange;
`;

export const ContentSpan = styled.span`
  opacity: 0.5;
  font-size: 18px;
`;

export const ImgTour = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 83%;
  margin-left: -1%;
  display: flex;
  justify-content: center;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  height: auto;
  margin-top: 50px;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;
}
`;

export const DivImgHeader = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

@media only screen and (max-width: 768px) 
{
  flex-direction: column;
  height: auto;
}
`;

export const DivImg1 = styled.div`
  overflow: hidden;
  height: 95%;
  width: 50%;
  margin-right: 25px;

@media only screen and (max-width: 768px) 
{
  width: 100%;
  flex: 1;
  height: auto;
  margin-bottom: 30px;
}
`;

export const DivImg2 = styled.div`
  overflow: hidden;
  height: 95%;
  width: 49%;

@media only screen and (max-width: 768px) 
{
  height: auto;
  width: 100%;
  flex: 1;
}
`;

export const DivImgCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  width: 100%;
  margin-top: 10px;

@media only screen and (max-width: 768px) 
{
  height: auto;
  flex-direction: column;
  margin-top: 30px;
  display: block;
}
`;

export const DivImgCenterLeft = styled.div`
  height: 100%;
  width: 30%;
  overflow: hidden;

@media only screen and (max-width: 768px) 
{
  width: 376px;
  height: 670px;
}
`;

export const DivImgCenterRight = styled.div`
  height: 100%;
  width: 70%;
  margin-left: 25px;
  overflow: hidden;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  margin-left: 0px;
  margin-top: 30px;
}
`;

export const DivImgCenterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 100%;
  overflow: hidden;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
}
`;

export const DivImg4 = styled.div`
  height: 100%;
  width: 49%;
  overflow: hidden;
  margin-right: 25px;

@media only screen and (max-width: 768px) 
{
  width: auto;
  height: auto;
  margin-bottom: 30px;
}
`;

export const DivImg5 = styled.div`
  height: 100%;
  width: 49%;
  overflow: hidden;

@media only screen and (max-width: 768px) 
{
  width: auto;
  height: auto;
}
`;

export const DivImgCenterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46%;
  width: 100%;
  overflow: hidden;
  margin-top: 25px;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
}
`;

export const Img1 = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  src: ${(props) => props.src};
  border-radius: 20px;
  overflow: hidden;
  background-size:cover;
  background-clip: inherit;

  animation: animate1 0.3s linear forwards;



  @keyframes animate1 {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    animation: animate22 0.3s linear forwards;
  }

  @keyframes animate22 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;
