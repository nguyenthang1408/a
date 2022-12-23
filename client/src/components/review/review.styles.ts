import styled from "styled-components";

export const WrapperReview = styled.div`
  height: 70vh;
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.03);
  margin-bottom: 100px;
`;

export const ReviewTitle = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReviewTitleH1 = styled.h1`
  color: orange;
`;

export const ReviewTitleSpan = styled.span`
  font-size: 18px;
  opacity: 0.6;
`;

export const DivCenter = styled.div`
  height: 420px;
  width: 70%;
`;

export const ReviewContent = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  margin-top: 50px;

  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }
`;

export const ReviewContentCart = styled.div`
  height: 420px;
  width: 345px;
  max-width: 345px;
  box-shadow: 0 0 20px rgb(0 0 0 / 2%);
  background-color: white;
  border-radius: 12px;

  :hover {
    box-shadow: 0 0 30px rgb(0 0 0 / 30%);
  }
`;

export const DivImgSingle = styled.div`
  height: 70px;
  margin-top: 50px;
  display: flex;
  justify-content: center;

  img {
    border-radius: 50%;
  }
`;

export const DivBelowImgSingle = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const DivSpanSpeak = styled.div`
  font-size: 18px;
  opacity: 0.4;
  display: flex;
  justify-content: center;

  div {
    width: 80%;

    span {
      margin: 20px 0px;
    }
  }
`;

export const DivNameSingle = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;

  h1 {
    opacity: 0.9;
    color: #333;
    font-size: 24px;
    text-transform: capitalize;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const DivJobSingle = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;

  h4 {
    color: #aaa;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    padding: 15px 0 0px;
  }
`;
