import React from "react";
import {
  WrapperPopular,
  DivPopular,
  DivHeader,
  DivHeaderH1,
  DivHeaderSpan,
  DivRowCart,
  DivCart,
  DivCartHeader,
  DivCartHeaderSpanLeft,
  DivCartHeaderSpanRight,
  DivImg,
  DivFooter,
  DivInsideFooter,
  FooterH2,
  FooterSpan,
  FooterDetail,
} from "./popular.styles";

export default function popular() {
  return (
    <WrapperPopular id="popular">
      <DivPopular>
        <DivHeader>
          <DivHeaderH1>CẨM NANG DU LỊCH</DivHeaderH1>
          <DivHeaderSpan>
            Góc chia sẻ kinh nghiệm và cập nhật thông tin mới nhất về du lịch
          </DivHeaderSpan>
        </DivHeader>
        <DivRowCart>
          <DivCart>
            <DivCartHeader>
              <DivCartHeaderSpanRight>Phổ Biến</DivCartHeaderSpanRight>
              <DivCartHeaderSpanLeft>27-07-2021</DivCartHeaderSpanLeft>
            </DivCartHeader>
            <DivImg color="src/assets/p1.jpg" />
            <DivFooter>
              <DivInsideFooter>
                <FooterH2>REVIEW PHÚ QUỐC 4N3Đ</FooterH2>
                <FooterSpan>Đăng bởi: admin</FooterSpan>
                <FooterDetail>Chi tiết</FooterDetail>
              </DivInsideFooter>
            </DivFooter>
          </DivCart>

          {/* Column 2 */}

          <DivCart>
            <DivCartHeader>
              <DivCartHeaderSpanRight>Phổ Biến</DivCartHeaderSpanRight>
              <DivCartHeaderSpanLeft>27-07-2021</DivCartHeaderSpanLeft>
            </DivCartHeader>
            <DivImg color="src/assets/p2.jpg" />
            <DivFooter>
              <DivInsideFooter>
                <FooterH2>PHÚ QUỐC 2020 5N4Đ</FooterH2>
                <FooterSpan>Đăng bởi: admin</FooterSpan>
                <FooterDetail>Chi tiết</FooterDetail>
              </DivInsideFooter>
            </DivFooter>
          </DivCart>

          {/* Column 3 */}

          <DivCart>
            <DivCartHeader>
              <DivCartHeaderSpanRight>Phổ Biến</DivCartHeaderSpanRight>
              <DivCartHeaderSpanLeft>07-09-2021</DivCartHeaderSpanLeft>
            </DivCartHeader>
            <DivImg color="src/assets/p3.png" />
            <DivFooter>
              <DivInsideFooter>
                <FooterH2>PHÚ QUỐC NGÀY TRỞ LẠI</FooterH2>
                <FooterSpan>Đăng bởi: admin</FooterSpan>
                <FooterDetail>Chi tiết</FooterDetail>
              </DivInsideFooter>
            </DivFooter>
          </DivCart>
        </DivRowCart>
      </DivPopular>
    </WrapperPopular>
  );
}
