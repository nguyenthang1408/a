import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  height: 100%;
  width: 100%;
`;

export const DivHeaderTitleH2 = styled.div`
  display: flex;
  margin-top: 100px;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const HeaderTitleH2 = styled.span`
  color: #ffa500;
  font-size: 22px;
  font-weight: 700;
`;
export const DivImg = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;

  img {
    width: 1140px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Img = styled.img``;

export const Hr = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Border = styled.hr`
  height: 1px;
  width: 100%;
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const DivImgChildren = styled.div`
  height: 106px;
`;

export const DivImgChildrenColumn = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    margin: 10px;
  }
`;

export const DivImgClick = styled.div`
  width: 100%;
  height: 100px;
`;

export const DivImgColumn = styled.div`
  display: flex;
`;

export const DivFooter = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DivCenterFooter = styled.div`
  width: 80%;
  display: table;
  display: flex;
  flex-direction: column;

  span {
    font-size: 20px;
    margin: 5px 0;
  }

  h2 {
    margin: 25px 0;
  }
`;

export const DivFooterZoom = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;

export const DivFooterZoomCenter = styled.div`
  width: 85%;
  height: 100%;
  display: inline-block;
`;

export const CartHotelZoom = styled.div`
  width: 360px;
  height: 560px;
  display: flex;
  align-items: center;
  float: left;
  flex-direction: column;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  margin: 25px 10px;

  img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 360px;
    height: 300px;
    border-radius: 10px 10px 0 0;
  }
`;

export const DivTitleCenterZoom = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0px;
    margin-top: 20px;
  }

  span {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const DivButton = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;

export const DivButtonPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export const Button = styled.button`
  height: 35px;
  width: 110px;
  background-color: #eba62d;
  border: 1px solid #eba62d;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 20px rgb(14 15 18 / 30%);
    background-color: orange;
  }
`;
