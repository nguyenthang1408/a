import React from "react";
import {
  WrapperPage,
  DivHeaderFooter,
  DivBodyFooter,
  DivHeaderFooterLeft,
  FooterLeftH1,
  FooterLeftSpan,
  FooterHeaderTitle,
  DivHeaderFooterCenter,
  DivHeaderFooterCenterH1,
  DivHeaderFooterCenterRight,
  FooterCenterSpan,
  FooterCenterSpanRight,
  DivFb,
  ButtonFb,
  DivEndSpan,
  DivEnd,
  SpanBlue,
} from "./footerPage.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FooterFullPage() {
  library.add(faFacebookF, faWhatsapp);
  return (
    <WrapperPage>
      <DivHeaderFooter>
        <DivHeaderFooterLeft>
          <FooterHeaderTitle>
            <FooterLeftH1 color="orange">Bee Bee &nbsp;</FooterLeftH1>
            <FooterLeftH1 color="black">Travel</FooterLeftH1>
          </FooterHeaderTitle>

          <FooterLeftSpan>Best Travel Agency</FooterLeftSpan>
        </DivHeaderFooterLeft>

        <DivHeaderFooterCenter>
          <DivHeaderFooterCenterH1>Về Bee Bee</DivHeaderFooterCenterH1>
          <FooterCenterSpan>Về chúng tôi</FooterCenterSpan>
          <FooterCenterSpan>Điều khoản và điều kiện</FooterCenterSpan>
          <FooterCenterSpan>Tuyển dụng</FooterCenterSpan>
          <FooterCenterSpan>Kênh đại lý</FooterCenterSpan>
        </DivHeaderFooterCenter>

        <DivHeaderFooterCenterRight>
          <DivHeaderFooterCenterH1>
            CÔNG TY TNHH BEE BEE TRAVEL PHÚ QUỐC
          </DivHeaderFooterCenterH1>
          <FooterCenterSpanRight>
            Cửa Lấp, Dương Tơ, Phú Quốc, Kiên Giang
          </FooterCenterSpanRight>
          <FooterCenterSpanRight>
            Giấy phép kinh doanh số: 1702164240 cấp ngày 14/06/2021 bởi Sở Kế
            Hoạch và Đầu Tư Tỉnh Kiên Giang
          </FooterCenterSpanRight>
          <FooterCenterSpanRight>
            Đại diện: Trần Hoàng Long
          </FooterCenterSpanRight>
          <FooterCenterSpanRight>Hotline: 0912323501</FooterCenterSpanRight>
          <FooterCenterSpanRight>
            Email: info@beebeetravel.vn
          </FooterCenterSpanRight>
        </DivHeaderFooterCenterRight>
      </DivHeaderFooter>
      <DivBodyFooter>
        <DivFb>
          <ButtonFb color="blue">
            <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
          </ButtonFb>
          <ButtonFb color="#1da1f3;">
            <FontAwesomeIcon icon={faWhatsapp} color="white" size="2x" />
          </ButtonFb>
        </DivFb>
        <DivEnd>
          <DivEndSpan>
            Copyright © 2022 <SpanBlue>Bee Bee Travel.</SpanBlue> All Right
            Reserved
          </DivEndSpan>
        </DivEnd>
      </DivBodyFooter>
    </WrapperPage>
  );
}
