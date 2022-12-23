import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faDoorOpen,
  faUtensils,
  faDumbbell,
  faSwimmingPool,
  faBacon,
  faStore,
  faWifi,
  faSpa,
  faTv,
  faSmokingBan,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons";
import {
  Wrapper,
  HeaderTitleH2,
  DivHeaderTitleH2,
  DivImg,
  Img,
  DivCenter,
  DivImgChildren,
  Hr,
  Border,
  DivImgChildrenColumn,
  DivFooter,
  DivCenterFooter,
  DivFooterZoom,
  DivFooterZoomCenter,
  CartHotelZoom,
  DivTitleCenterZoom,
  DivButton,
  DivButtonPrice,
  Button,
} from "./bookTicket.styles";

export default function bookTicket() {
  library.add(faCreativeCommonsNc);

  const [img, setImg] = useState("src/assets/h-1-1.png");

  const ListImg = {
    img1: "src/assets/h-1-1.png",
    img2: "src/assets/h-1-2.png",
    img3: "src/assets/h-1-3.png",
    img4: "src/assets/h-1-4.png",
    img5: "src/assets/h-1-5.png",
    img6: "src/assets/h-1-6.png",
  };

  const [show1, setShow1] = useState(true);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const [show5, setShow5] = useState(false);

  const [show6, setShow6] = useState(false);

  const handleShowImg1 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img1);
  };

  const handleShowImg2 = () => {
    setShow2(true);
    setShow1(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img2);
  };

  const handleShowImg3 = () => {
    setShow3(true);
    setShow2(false);
    setShow1(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img3);
  };

  const handleShowImg4 = () => {
    setShow4(true);
    setShow2(false);
    setShow3(false);
    setShow1(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img4);
  };

  const handleShowImg5 = () => {
    setShow5(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow1(false);
    setShow6(false);
    setImg(ListImg.img5);
  };

  const handleShowImg6 = () => {
    setShow6(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow1(false);
    setImg(ListImg.img6);
  };

  return (
    <Wrapper>
      <DivHeaderTitleH2>
        <HeaderTitleH2>VINPEARL DISCOVERY COASTALLAND</HeaderTitleH2>
      </DivHeaderTitleH2>
      <DivImg>
        <img src={img} />
      </DivImg>
      <DivCenter>
        <Hr>
          <Border></Border>
        </Hr>
        <DivImgChildren>
          <DivImgChildrenColumn>
            <img
              src={ListImg.img1}
              width="100%"
              height="100%"
              style={show1 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg1}
            />
            <img
              src={ListImg.img2}
              width="100%"
              height="100%"
              style={show2 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg2}
            />
            <img
              src={ListImg.img3}
              width="100%"
              height="100%"
              style={show3 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg3}
            />
            <img
              src={ListImg.img4}
              width="100%"
              height="100%"
              style={show4 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg4}
            />
            <img
              src={ListImg.img5}
              width="100%"
              height="100%"
              style={show5 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg5}
            />
            <img
              src={ListImg.img6}
              width="100%"
              height="100%"
              style={show6 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg6}
            />
          </DivImgChildrenColumn>
        </DivImgChildren>
      </DivCenter>
      <DivFooter>
        <DivCenterFooter>
          <span>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            &emsp; Bãi Dài, Gành Dầu, Phú Quốc
          </span>
          <span>
            <FontAwesomeIcon icon={faDoorOpen} />
            &emsp; Nhận phòng: 14:00
          </span>
          <span>
            <FontAwesomeIcon icon={faDoorOpen} />
            &emsp; Trả phòng: 12:00
          </span>

          <h2>Mô tả</h2>

          <span style={{ fontSize: "19px", lineHeight: 1.5 }}>
            Nổi bật với kiến ​​trúc Địa Trung Hải, Vinpearl Discovery
            Coastalland Phu Quoc thiết kế từng phòng nghỉ trang nhã, sang trọng
            trong khu bãi biển Gành Dầu thuộc Đảo Phú Quốc. Phòng nghỉ tại đây
            được trang bị két an toàn cá nhân, khu vực ghế ngồi và máy sấy quần
            áo. Phòng tắm riêng đi kèm vòi sen, máy sấy tóc và đồ vệ sinh cá
            nhân miễn phí. Các phòng còn có TV truyền hình cáp, minibar và khu
            vực ăn uống để tạo thuận tiện cho khách. Resort có các cửa hàng ăn
            uống phục vụ nhiều món ăn kiểu Việt Nam, Đông Nam Á và Châu Âu. Du
            khách có thể truy cập WiFi miễn phí ở các khu vực chung. Dịch vụ đưa
            đón sân bay có thể được sắp xếp theo yêu cầu. Chỗ nghỉ nằm cách vườn
            thú Vinpearl Safari Phú Quốc 10 phút lái xe và phường Dương Đông 35
            phút lái xe. Sân bay gần nhất là sân bay quốc tế Phú Quốc, nằm trong
            bán kính 1 giờ lái xe từ Vinpearl Discovery Coastalland Phu Quoc.
          </span>

          <h2>Tiện ích</h2>

          <span>
            <FontAwesomeIcon icon={faUtensils} />
            &emsp; Nhà hàng
          </span>

          <span>
            <FontAwesomeIcon icon={faDumbbell} />
            &emsp; Phòng Gym
          </span>

          <span>
            <FontAwesomeIcon icon={faSwimmingPool} />
            &emsp; Hồ bơi
          </span>

          <span>
            <FontAwesomeIcon icon={faBacon} />
            &emsp; Công viên nước
          </span>

          <span>
            <FontAwesomeIcon icon={faStore} />
            &emsp; Shop quà
          </span>

          <span>
            <FontAwesomeIcon icon={faWifi} />
            &emsp; Mạng internet
          </span>

          <span>
            <FontAwesomeIcon icon={faSpa} />
            &emsp; Cây cảnh
          </span>

          <span>
            <FontAwesomeIcon icon={faTv} />
            &emsp; Tivi
          </span>

          <span>
            <FontAwesomeIcon icon={faSmokingBan} />
            &emsp; Không hút thuốc
          </span>

          <h2 style={{ marginTop: "80px" }}>Hạng phòng</h2>
        </DivCenterFooter>
      </DivFooter>
      <DivFooterZoom>
        <DivFooterZoomCenter>
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking1.png" />
            <DivTitleCenterZoom>
              <h3>Villa 2 Bedrooms (233m2m2)</h3>
              <span>4A+2C-2 Giường Đơn Và 1 Giường Đôi Cực Lớn</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Không Hoàn
                Tiền
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao Gồm Bữa Sáng
              </span>
              <DivButton>
                <Button> Đặt ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    5,120,000 đ
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    phòng/đêm
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 2 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking2.png" />
            <DivTitleCenterZoom>
              <h3>Villa 3 Bedrooms(390m2m2)</h3>
              <span>6A+3C-2 Giường Đơn Và 2 Giường Đôi Lớn</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Không Hoàn
                Tiền
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao Gồm Bữa Sáng
              </span>
              <DivButton>
                <Button> Đặt ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    7,520,000 đ
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    phòng/đêm
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 3 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking3.png" />
            <DivTitleCenterZoom>
              <h3>Villa 3 Bedrooms Ocean View(390m2m2)</h3>
              <span>6A+3C-2 Giường Đơn Và 2 Giường Đôi Lớn Không Hoàn</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Không Hoàn
                Tiền
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao Gồm Bữa Sáng
              </span>
              <DivButton>
                <Button> Đặt ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    8,480,000 đ
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    phòng/đêm
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 3 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking3.png" />
            <DivTitleCenterZoom>
              <h3>Villa 4 Bedrooms(405m2m2)</h3>
              <span>8A+4C-3 Giường Đôi Và 2 Giường Đơn</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Không Hoàn
                Tiền
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao Gồm Bữa Sáng
              </span>
              <DivButton>
                <Button> Đặt ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    9,920,000 đ
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    phòng/đêm
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
        </DivFooterZoomCenter>
      </DivFooterZoom>
    </Wrapper>
  );
}
