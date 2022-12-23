import React, { useState, useEffect } from "react";
import {
  WrapperReview,
  ReviewTitle,
  ReviewTitleH1,
  ReviewTitleSpan,
  ReviewContent,
  ReviewContentCart,
  DivCenter,
  DivImgSingle,
  DivBelowImgSingle,
  DivSpanSpeak,
  DivNameSingle,
  DivJobSingle,
} from "./review.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Review() {



  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const [colorFirst, setColorFirst] = useState("orange");

  const [colorSecond, setColorSecond] = useState("#aaa");

  const HandleFirst = () => {
    setColorFirst("orange");
    setColorSecond("#aaa");
  };

  const HandleSecond = () => {
    setColorFirst("#aaa");
    setColorSecond("orange");
  };
var a;
if(window.matchMedia("(max-width: 700px)"))
{
  a=3;
}
else{
  a=1;
}

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <WrapperReview>
      <DivCenter>
        <ReviewTitle>
          <ReviewTitleH1>KHÁCH HÀNG NÓI GÌ?</ReviewTitleH1>
          <ReviewTitleSpan>
            Những chia sẻ thực tế của khách hàng sau khi sử dụng dịch vụ của Bee
          </ReviewTitleSpan>
        </ReviewTitle>
        <ReviewContent>
          <Slider {...settings}>
            <ReviewContentCart>
              <DivImgSingle>
                <img src="src/assets/avt1.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Mình đã đi du lịch nhiều nơi cũng đã từng đi tour đảo, sau
                    khi sử dụng dịch vụ tour đảo của Bee mình thấy rất hài lòng,
                    mình sẽ giới thiệu cho bạn bè.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Duy Hải</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Travel blogger, Hà Nội</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt2.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Mình rất yêu Phú Quốc, cứ có dịp là mình đi. Trải nghiệm lần
                    đầu với dịch vụ của Bee rất hài lòng, mình sẽ tiếp tục dùng
                    dịch vụ của Bee ở những lần sau.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Lương Bằng Quang</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca nhạc sĩ, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt3.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Tour thật sự rất tuyệt vời, lần đầu mình được thấy san hô tự
                    nhiên như thế này, các anh hướng dẫn viên rất nhiệt tình,
                    mình rất hài lòng.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Tuệ Phương</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca sĩ, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt4.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Trải nghiệm thật thú vị khi tham gia tour 4 đảo của Bee, lần
                    đầu mình được ngắm san hô trực tiếp như vậy, rất vui ạ.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Hiền Hồ</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca sĩ, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt5.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Cá nhân anh thấy tour đảo của Bee rất tuyệt vời, giá tour
                    hợp lý, lịch trình đầy đủ. Anh và gia đình đã không sai lầm
                    khi lựa chọn Bee.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Anh Đức</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Travel blogger, Hà NộiDoanh nhân, Hà Nội</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt6.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Sau khi sử dụng dịch vụ tour 4 đảo của Bee thì mình thấy rất
                    hài lòng về chất lượng cũng như sự nhiệt tình của các hướng
                    dẫn viên.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Lynk Lee</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca sĩ, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
          </Slider>
        </ReviewContent>

        {/* Row 2 */}

        {/* <ButtonDiv>
          <Button color={colorFirst} onClick={HandleFirst}></Button>&nbsp;
          <Button color={colorSecond} onClick={HandleSecond}></Button>&nbsp;
        </ButtonDiv> */}
      </DivCenter>
    </WrapperReview>
  );
}
