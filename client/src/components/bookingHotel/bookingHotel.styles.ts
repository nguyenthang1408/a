import styled from "styled-components";

export const WrapperBooking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 85rem;
  width: 100%;
  margin-top: 570px;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: 80%;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 50px;
}
`;



export const CartContent = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
}
`;

export const BookingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 12%;
  width: 100%;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
}
`;

export const CardDivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardDivRow = styled.div`
  display: flex;
`;

export const BookingHeaderH2 = styled.h1`
  color: orange;
`;

export const BookingHeaderSpan = styled.span`
  opacity: 0.5;
  font-size: 18px;
`;

export const BookingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28rem;
  width: 90%;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
}
`;

export const CardBooking = styled.div`
  display: flex;
  margin-right: 20px;
  flex-direction: column;
  align-content: space-between;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  width: 30%;
  height: 30rem;
  flex-wrap: wrap;
  margin-bottom: 55px;


  &:hover{
    box-shadow: 0 0 20px rgb(0 0 0 / 30%);
  }

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  padding-bottom: 130px;
}
`;

export const CartTitleDiv = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 50px;
`;

export const CartTitleH2 = styled.h3`
  float: left;
`;

export const CardBooking2Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardBooking2DivRight = styled.div`
  height: 100%;
`;

export const SpanStar = styled.span`
  opacity: 0.8;
  font-size: 16px;
  margin-right: 4px;
`;

export const SpanNumber = styled.span`
  font-size: 16px;
  opacity: 0.8;
  margin-left: 5px;
`;

export const CartDiv = styled.div`
  height: 60%;
  width: 100%;
`;

export const Address = styled.div`
  margin-left: 5px;
  white-space: nowrap;
  opacity: 0.5;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 16px;
`;

export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  src: ${(props) => props.src};

@media only screen and (max-width: 768px) 
{
  background-size: cover;
}
`;

export const CartImgShort = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 10px;
  src: ${(props) => props.src};
`;

export const Button = styled.button`
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: white;

  &:hover {
    background-color: orange;
  }
`;

export const Price = styled.span`
  margin-top: 20px;
  font-weight: 600;
  opacity: 0.9;
  font-size: ${(props) => props.about};
`;
export const PriceDiv = styled.div`
  display: flex;
`;

export const TicketSpan = styled.span`
  font-size: 16px;
`;

export const DivBr = styled.div`
  display: flex;
  opacity: 0.7;
  align-items: flex-end;
  white-space: nowrap;
  flex-direction: column;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const ButtonMore = styled.button`
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: white;

  &:hover {
    background-color: orange;
  }
`;
