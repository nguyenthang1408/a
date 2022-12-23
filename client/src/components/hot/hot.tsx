import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  WrapperHot,
  DivLeft,
  HotDivTitle,
  HotSpanTitle,
  HotStar,
  HotStarSpan,
  DivWrapper,
  DivThree,
  DivThreeSpan1,
  DivThreeSpan2,
  DivThreeSpan3,
  DivFour,
  DivFourSpan,
  DivFourSpan1,
  DivButton,
  Button1,
  Button2,
  DivRight,
  DivRightImg,
  DivHeader,
  ImgSpan,
  ImgSpan1,
  CenterH1,
  CenterSpan,
  DivCenter,
  DivFooterPrice,
  FooterPriceSpan,
} from "./hot.styles";

export default function hot() {
  return (
    <WrapperHot id="hot">
      <DivLeft>
        <DivWrapper>
          <HotDivTitle>
            <HotSpanTitle>Tour 4 Đảo Cano Và Cáp Treo</HotSpanTitle>
          </HotDivTitle>
          <HotStar>
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <HotStarSpan>2544 đánh giá</HotStarSpan>
          </HotStar>
          <DivThree>
            <FontAwesomeIcon icon={faAngleRight} color="white" />
            <DivThreeSpan1>Chụp Hình Máy Cơ</DivThreeSpan1>
            <FontAwesomeIcon icon={faAngleRight} color="white" />
            <DivThreeSpan2>Quay Flycam </DivThreeSpan2>
            <FontAwesomeIcon icon={faAngleRight} color="white" />
            <DivThreeSpan3>Trải Nghiệm Cáp Treo</DivThreeSpan3>
          </DivThree>
          <DivFour>
            <DivFourSpan>
              Tham quan 4 đảo gồm: Hòn Móng Tay, Hòn Gầm Ghì, Hòn Mây Rút, Hòn
              Thơm...trải nghiệm lặn ngắm san hô tự nhiên với thiết bị hỗ trợ.
              Chụp hình và quay flycam miễn phí.
            </DivFourSpan>
            <DivFourSpan1>
              Ăn trưa gồm 8 món ăn: lẩu cá bóp, sò nướng mỡ hành, tôm hấp, mực
              xào chua ngọt, cá kho tộ, trứng chiên, cơm trắng, trái cây.
            </DivFourSpan1>
          </DivFour>
          <DivButton>
            <Button1 color="transparent">Chi tiết</Button1>
            <Button2 color="#eba62d">Đặt ngay</Button2>
          </DivButton>
        </DivWrapper>
      </DivLeft>
      <DivRight>
        <DivRightImg>
          <DivHeader>
            <ImgSpan>Hot Deal</ImgSpan>
            <ImgSpan1>Đặt Tour Từ 5 Người Lớn</ImgSpan1>
          </DivHeader>

          <DivCenter>
            <CenterH1>10%</CenterH1>
            <CenterSpan>Off</CenterSpan>
          </DivCenter>

          <DivFooterPrice>
            <FooterPriceSpan>1,050,000 đ</FooterPriceSpan>
          </DivFooterPrice>
        </DivRightImg>
      </DivRight>
    </WrapperHot>
  );
}
