import styled from "styled-components";

export const StylesHeaderTitle = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  justify-content: center;

@media only screen and (max-width: 768px) 
{
  height: auto;
}
`;

export const WrapperHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;

@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  flex-direction: column;
}

`;

export const Tour = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 30%;

@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  flex-direction: column;
}
`;

export const WrapperTourTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  margin-left: 10px;
`;

export const WrapperHotelTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  margin-left: 10px;
`;

export const WrapperTicketTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  margin-left: 10px;
`;

export const ImgTour = styled.img`
  height: 80px;
  width: 80px;
  src: ${(props) => props.src};

@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  margin-top: 20px;
  height: 100px;
  width: 100px;
}
`;

export const LabelTour = styled.h3`
  color: orange;

@media only screen and (max-width: 768px) 
{
  width: 270px;
  text-align: center;

}
`;

export const ContentTour = styled.span`
  font-size: 17px;
  opacity: 0.5;

@media only screen and (max-width: 768px) 
{
  width: 270px;
  text-align: center;

}
`;
