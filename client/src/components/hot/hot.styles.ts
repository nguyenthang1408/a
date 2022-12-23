import styled from "styled-components";

export const WrapperHot = styled.div`
  margin-top: 100px;
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url("src/assets/bb.jpg");
  background-size: cover;
 

  &::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(235,166,45,.2);
    z-index: 1;
  }

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  background-size: cover;
  background-position: center center;
  position: relative;
  

}
`;

export const DivLeft = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  margin-left: 15px;
}
`;

export const DivWrapper = styled.div`
  width: 80%;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: auto;
  width: auto;
  margin-top: 100px;
}
`;

export const HotDivTitle = styled.div`
  text-align: left;
`;

export const HotSpanTitle = styled.h1`
  color: white;
`;

export const HotStar = styled.div`
  text-align: left;
`;

export const HotStarSpan = styled.span`
  color: white;
  margin-left: 5px;
  font-size: 17px;
`;

export const DivThree = styled.div`
  margin-top: 30px;
  text-align: left;
  display: flex;
  align-items: center;
`;
export const DivThreeSpan1 = styled.span`
  margin-left: 10px;
  margin-right: 30px;
  color: white;
`;

export const DivThreeSpan2 = styled.span`
  margin-left: 10px;
  margin-right: 30px;
  color: white;
`;

export const DivThreeSpan3 = styled.span`
  margin-left: 10px;
  margin-right: 30px;
  color: white;
`;

export const DivFour = styled.div`
  margin-top: 30px;
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivFourSpan = styled.span`
  color: white;
  font-size: 16px;
`;

export const DivFourSpan1 = styled.span`
  margin-top: 10px;
  color: white;
  font-size: 16px;
`;

export const DivButton = styled.div`
  margin-top: 50px;
  height: 50px;
  width: 100%;
`;

export const Button1 = styled.button`
  width: 120px;
  height: 35px;
  border: 1px solid white;
  color: white;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const Button2 = styled.button`
  margin-left: 40px;
  width: 120px;
  height: 35px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;

export const DivRight = styled.div`
  width: 30%;
  height: 100%;
  top: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

@media only screen and (max-width: 768px) 
{
  display: block;
  height: 800px;
  width: auto;
  margin-top: 50px;
  margin-left: 15px;
}
`;

export const DivRightImg = styled.div`
  height: 80%;
  width: 14.4rem;
  background-image: url("src/assets/a.png");
  background-repeat: no-repeat;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: space-around;

@media only screen and (max-width: 768px) 
{
  height: 90%;
  width: 17rem;
  background-size: cover;
}
`;


export const DivHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgSpan = styled.span`
  font-size: 40px;
  font-weight: 700;
`;

export const ImgSpan1 = styled.span`
  font-size: 20px;
  font-weight: 500px;
`;

export const DivCenter = styled.div`
  height: 200px;
  text-align: center;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const CenterSpan = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const DivFooterPrice = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterPriceSpan = styled.span`
  font-size: 40px;
  font-weight: 700;
`;
