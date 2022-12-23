import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 3300px;
`;

export const WrapperBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 70%;
  height: 60px;
  justify-content: center;
  align-items: flex-start;
`;

export const H1 = styled.h1`
  color: orange;
  vertical-align: middle;
`;

export const DivContentImg = styled.div`
  height: 26rem;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const DivImg = styled.div`
  height: 100%;
  width: 55%;
`;

export const DivOld = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  src: ${(props) => props.src};
`;

export const DivRightImg = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
`;

export const DivRightImg1 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Span = styled.span`
  font-size: 22px;
  opacity: 0.8;
  margin: 5px 0;
`;

export const Select = styled.select`
  height: 35px;
  width: 80px;
  border: 1px solid #d7d7d7;
`;

export const DivSelect = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export const Option = styled.option``;

export const Hr = styled.hr`
  border: 1px solid #333;
  opacity: 0.3;
  width: 100%;
  margin-top: 20px;
`;

export const ButtonBookTickets = styled.button`
  height: 80px;
  width: 100%;
  background-color: #eba62d;
  color: white;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: orange;
  }
`;

export const DivFooterCenter = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 5px 0;
`;

export const SpanFooter = styled.span`
  font-size: 18px;
  opacity: 0.8;
`;

export const DivInDiv = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  justify-content: space-between;
`;

export const DivFooter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DivInDivFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 70%;
  height: 100%;
`;
export const Ul = styled.ol`
  margin-left: -20px;
`;

export const Li = styled.li`
  position: relative;
  font-size: 17px;
  margin-top: 8px;
  color: #565a5c;
  font-family: "Helvetica-nue", sans-serif;
  text-transform: none;

  :marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;
