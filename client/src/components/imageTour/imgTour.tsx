import React from "react";
import {
  WrapperImgTour,
  TitleImgTour,
  TitleH1,
  ContentSpan,
  ImgTour,
  DivImgHeader,
  Img1,
  DivImgCenter,
  DivImgCenterLeft,
  DivImgCenterRight,
  DivImgCenterTop,
  DivImgCenterBottom,
  DivImg1,
  DivImg2,
  DivImg4,
  DivImg5,
} from "./imgTour.styles";

export default function imgTour() {
  return (
    <WrapperImgTour id="img">
      <TitleImgTour>
        <TitleH1>HÌNH ẢNH TRẢI NGHIỆM CÙNG BEE</TitleH1>
        <ContentSpan>Hành trình khám phá đại dương mênh mông</ContentSpan>
      </TitleImgTour>

      <ImgTour>
        <DivImgHeader>
          <DivImg1>
            <Img1 width="100%" height="100%" src="src/assets/img1.jpg" />
          </DivImg1>
          <DivImg2>
            <Img1 width="100%" height="100%" src="src/assets/img2.jpg" />
          </DivImg2>
        </DivImgHeader>

        <DivImgCenter>
          <DivImgCenterLeft>
            <Img1 width="100%" height="100%" src="src/assets/img3.jpg" />
          </DivImgCenterLeft>

          <DivImgCenterRight>
            <DivImgCenterTop>
              <DivImg4>
                <Img1 width="100%" height="100%" src="src/assets/img4.jpg" />
              </DivImg4>
              <DivImg5>
                <Img1 width="100%" height="100%" src="src/assets/img5.jpg" />
              </DivImg5>
            </DivImgCenterTop>

            <DivImgCenterBottom>
              <Img1 width="100%" height="100%" src="src/assets/img6.jpg" />
            </DivImgCenterBottom>
          </DivImgCenterRight>
        </DivImgCenter>
      </ImgTour>
    </WrapperImgTour>
  );
}
