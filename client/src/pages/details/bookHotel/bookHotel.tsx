import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import footer from "../../../components/footer/footer";
import {
  Wrapper,
  DivHeader,
  WrapperBook,
  H1,
  DivContentImg,
  DivImg,
  CartImg,
  DivRightImg,
  DivRightImg1,
  Span,
  Select,
  Option,
  DivSelect,
  DivOld,
  Hr,
  ButtonBookTickets,
  DivFooterCenter,
  SpanFooter,
  DivInDiv,
  DivFooter,
  DivInDivFooter,
  Ul,
  Li,
} from "./bookHotel.styles";
import Footer from "../../../components/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faPrint,
  faCalendar,
  faRecycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { numberTicket } from "../../../components/redux/Tickets/numberTicket";
import { fetchTicket } from "../../../components/redux/Tickets/ticketSlice";

export default function bookHotel() {
  const [listBook, setListBook] = useState({
    img: "",
    title: "",
    star: 5,
    numberReview: 0,
    address: "",
    price: 0,
    bookHotel: false,
    priceChildren: 0,
    priceElderly: 0,
  });

  const [numberCount, setNumberCount] = useState();

  const [quantity, setQuantity] = useState(0);

  const [quantityAdults, setQuantityAdults] = useState(0);

  const [quantityElder, setQuantityElder] = useState(0);

  const [sumMoney, setSumMoney] = useState(0);

  const param = useParams();

  const dispatch = useDispatch();

  const number = useSelector((state: any) => state.numberTicket.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.post("http://localhost:5555/getBookId", {
      data: {
        id: param,
      },
    }).then((res) => setListBook(res.data));
  }, []);

  const handleAddNumber = () => {
    dispatch(numberTicket.actions.addBuyTicket(param));
  };

  function currencyFormat(num: Number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    number.map((value: any) => {
      if (value.id == param.id) {
        setNumberCount(value.ticket);
      }
    });
  }, [number]);

  const handleChange = (a: any) => {
    setQuantity(a.target.value);
  };

  const handleChangeAdults = (e: any) => {
    setQuantityAdults(e.target.value);
  };

  const handleElder = (e: any) => {
    setQuantityElder(e.target.value);
  };

  useEffect(() => {
    const sum =
      quantityAdults * 1150000 + quantity * 575000 + quantityElder * 1150000;
    setSumMoney(sum);
  }, [quantity, quantityAdults, quantityElder]);

  return (
    <Wrapper>
      <WrapperBook>
        <DivHeader>
          <H1>TOUR 3 ĐẢO</H1>
        </DivHeader>
        <DivContentImg>
          <DivImg>
            <CartImg src={`${listBook.img}`} alt="" />
          </DivImg>
          <DivOld>
            <DivRightImg>
              <Span>Người lớn (trên 1,4m)</Span>
              <DivSelect>
                <Select onChange={(e) => handleChangeAdults(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>

                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {" "}
                  {currencyFormat(Number(listBook.price))} đ
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(quantityAdults * Number(listBook.price))} đ
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 2 */}

            <DivRightImg>
              <Span>Trẻ em (từ 1m đến 1,4m)</Span>
              <DivSelect>
                <Select onChange={(e) => handleChange(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>

                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {currencyFormat(Number(listBook.priceChildren))} đ
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(quantity * Number(listBook.priceChildren))} đ
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 3 */}

            <DivRightImg>
              <Span>Người cao tuổi (trên 60 tuổi)</Span>
              <DivSelect>
                <Select onChange={(e) => handleElder(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {" "}
                  {currencyFormat(Number(listBook.priceElderly))} đ
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(
                    quantityElder * Number(listBook.priceElderly)
                  )}{" "}
                  đ
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 4 */}

            <Hr></Hr>

            <DivRightImg1>
              <Span>Tổng tạm tính: </Span>
              <Span style={{ color: "#ff5722", fontWeight: 600, opacity: 1 }}>
                {currencyFormat(sumMoney)}
              </Span>
            </DivRightImg1>
            <ButtonBookTickets onClick={handleAddNumber}>
              ĐẶT VÉ
            </ButtonBookTickets>
          </DivOld>
        </DivContentImg>

        {/* footerCenter */}

        <DivFooterCenter>
          <DivInDiv>
            <SpanFooter>
              <FontAwesomeIcon
                icon={faBoltLightning}
                fontSize="14px"
                color="red"
              />{" "}
              Xác nhận nhanh chóng
            </SpanFooter>

            {/* xuat ve */}

            <SpanFooter>
              <FontAwesomeIcon icon={faPrint} fontSize="16px" /> Xuất vé điện tử
            </SpanFooter>
            {/* ve co dinh */}
            <SpanFooter>
              <FontAwesomeIcon icon={faCalendar} fontSize="16px" /> Vé áp dụng
              ngày cố định
            </SpanFooter>

            {/* ve khong tra */}

            <SpanFooter style={{ marginRight: "100px" }}>
              <FontAwesomeIcon icon={faRecycle} fontSize="16px" /> Vé không hoàn
              trả
            </SpanFooter>
          </DivInDiv>
        </DivFooterCenter>

        {/* footer */}

        <DivFooter>
          <DivInDivFooter>
            <Span style={{ opacity: "1" }}>Tổng quan</Span>
            <Span style={{ fontSize: "18px" }}>
              Địa chỉ: 104, Trần Hưng Đạo, P.Dương Đông, TP.Phú Quốc, T.Kiên
              Giang
            </Span>
            <Span style={{ fontSize: "18px" }}>Giờ mở cửa: 7:30 - 17:30</Span>
            <Span style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <Span style={{ fontSize: "18px" }}>1 đánh giá</Span>
            </Span>
            <Span style={{ opacity: "1" }}>Chi tiết</Span>
            <Span style={{ fontSize: "18px" }}>
              Phú Quốc - hòn đảo ngọc với những địa điểm khám phá không thể bỏ
              lỡ như Hòn Mây Rút , hòn Móng Tay, Hòn Ghầm Ghì và Hòn Thơm. Đặc
              biệt là cáp treo Hòn Thơm là cáp treo vượt biển dài nhất thế giới
              hiện nay . Tham gia combo tour trọn gói này, chúng ta sẽ cùng với
              Bee Bee trải nghiệm, tham gia những hoạt động như lặn ngắm san hô
              ,câu cá ....thưởng thức hải sản tươi sống bao gồm 8 món ngay trên
              đảo.
            </Span>
            <Span
              style={{ fontSize: "20px", opacity: "0.7", marginTop: "5px" }}
            >
              LỊCH TRÌNH THAM QUAN
            </Span>
            <Span style={{ fontSize: "18px" }}>
              8-9h: &nbsp;&nbsp;&nbsp;Đón quý khách tại khách sạn / resort /
              điểm hẹn
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Tham quan trang trai nuôi cấy ngọc trai
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Di chuyển về cảng An Thới , Lên Cano cùng khám phá quần đảo An
              Thới , Phú Quốc
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Cano di chuyển tham quan đi qua 12 hòn đảo lớn nhỏ và dừng chân
              tại 4 điểm đẹp nhất
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Hòn Móng Tay : Check in - tắm biển
            </Span>
            <Span style={{ fontSize: "18px" }}>Hòn Gầm Ghì : Ngắm san hô</Span>
            <Span style={{ fontSize: "18px" }}>
              Hòn Mây Rút : Nghỉ ngơi - tắm biển
            </Span>
            <Span style={{ fontSize: "18px" }}>Ăn trưa hải sản 8 món</Span>
            <Span style={{ fontSize: "18px" }}>
              Công viên san hô : đi bộ dưới đáy biển - chi phí tự túc
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Cano di chuyển về cảng An Thới.
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Xe đưa quý khách check in tại cung đường Hy Lạp tại Ga An Thới
            </Span>
            <Span style={{ fontSize: "18px" }}>
              17h00 : Xe đưa quý khách trở về khách sạn , điểm hẹn hoặc các địa
              điểm khác theo yêu cầu của khách hàng.
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR BAO GỒM:</Span>
            <Span>
              <Ul>
                <Li>Xe đưa đón</Li>
                <Li>Cano SB hiện đại</Li>
                <Li>HDV nhiệt tình theo suốt hành trình</Li>
                <Li>Vé cáp treo , CVN</Li>
                <Li>Bữa trưa với thực đơn 8 món</Li>
                <Li>
                  Dụng cụ lặn ngắm san hô , áo phao , kính lặn , ống thở , chân
                  vịt ...
                </Li>
                <Li>Dụng cụ câu cá</Li>
                <Li>MIỄN PHÍ CHỤP ẢNH VÀ QUAY FLYCAM KỶ NIỆM THỰC ĐƠN</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>THỰC ĐƠN</Span>
            <Span>
              <Ul>
                <Li>Lâủ cá Bớp</Li>
                <Li>Cá Bớp kho tộ</Li>
                <Li>Tôm nướng hoặc luộc</Li>
                <Li>Sò tô nướng mỡ hành</Li>
                <Li>Mực xào chua ngọt</Li>
                <Li>Trúng chiên</Li>
                <Li>Cơm trắng</Li>
                <Li>Trái cây</Li>
                <Li>Trà đá</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR KHÔNG BAO GỒM</Span>
            <Span>
              <Ul>
                <Li>
                  Vé đi bộ dưới đáy biển (liên hệ với HDV hoặc Sales để đặt
                  trước nếu sử dụng dịch vụ này)
                </Li>
                <Li>Chi phí cá nhân khác</Li>
                <Li>Vé sunset sanato ( 100k )</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR RIÊNG GIA ĐÌNH</Span>
            <Span>
              <Ul>
                <Li>
                  Trẻ từ 1 - 3 tuổi được miễn phí (nếu phát sinh vé cáp treo sẽ
                  tự túc thanh toán thêm phí vé cáp treo trẻ em).
                </Li>
                <Li>
                  Trong mỗi nhóm khách, 02 người lớn chỉ được kèm tối đa 01 trẻ
                  nhỏ miễn phí, nếu nhiều hơn sẽ phụ thu 50% vé trên mỗi trẻ
                  nhỏ.
                </Li>
                <Li>
                  Trẻ em từ 4 - 9 tuổi tính 50% vé người lớn (trường hợp tour bé
                  phát sinh chiều cao trên 1m4 nếu có đi cáp treo phụ thu phí vé
                  cáp treo người lớn VNĐ).
                </Li>
                <Li>Trẻ em từ 10 tuổi trở lên tính bằng vé người lớn</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>CHÍNH SÁCH THANH TOÁN:</Span>
            <Span>
              <Ul>
                <Li>Thanh toán 50% khi đặt tour</Li>
                <Li>Số tiền còn lại sẽ được thanh toán trong ngày đi tour</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>CHÍNH SÁCH HỦY TOUR:</Span>
            <Span style={{ fontSize: "18px" }}>Tour ghép:</Span>
            <Span style={{ fontSize: "18px" }}>
              Hủy trước 01 ngày: miễn phí huỷ
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Hủy trong ngày: phạt phí 100%
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Đăng ký không tham gia phạt 100%.
            </Span>
            <Span style={{ fontSize: "18px" }}>Tour riêng:</Span>
            <Span style={{ fontSize: "18px" }}>
              Hủy trước 03 ngày so với ngày đi tour: miễn phí
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Hủy trước 02 ngày so với ngày đi tour: phạt phí 50% tổng tiền tour
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Hủy trước 01 ngày so với ngày đi tour: phạt phí 100% tổng tiền
              tour
            </Span>
            <Span style={{ fontSize: "18px", fontWeight: "700" }}>
              Trường hợp bất khả kháng:
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Công ty hủy tour do sự cố bất khả kháng như thiên tai, dịch bệnh,
              hoả hoạn, lũ lụt. Hoặc do lệnh cấm tàu, cấm xe, cấm đường, đình
              công, do xe lửa, máy bay hoãn/hủy chuyến ...
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Công ty không chịu trách nhiệm bồi thường thêm bất kỳ chi phí nào
              khác ngoài việc hoàn trả những chi phí dịch vụ Quý khách chưa được
              sử dụng của tour đó.
            </Span>
            <Span style={{ fontSize: "20px" }}>CHÍNH SÁCH GIẢM TRỪ</Span>
            <Span style={{ fontSize: "18px" }}>Trường hợp bất khả kháng:</Span>
            <Span>
              <Ul>
                <Li>
                  Đối với những tour có bao gồm ăn trưa sẽ giảm trừ 200k/vé
                  người lớn khi khách tự túc ăn trưa.
                </Li>
                <Li>
                  Khách tour ghép tự túc di chuyển đi và về hoặc có tài xế đưa
                  đón riêng giảm 50k/khách.
                </Li>
                <Li>Tour VIP không sử dụng HDV giảm 500k.</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Khách Tour VIP tự túc di chuyển được giảm trừ theo bảng giá xe và
              không gồm phụ thu xe 7 chổ, 16 chổ.
            </Span>
          </DivInDivFooter>
        </DivFooter>
      </WrapperBook>
    </Wrapper>
  );
}
