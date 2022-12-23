import React from "react";
import {
  WrapperBooking,
  BookingHeader,
  BookingContent,
  BookingHeaderH2,
  BookingHeaderSpan,
  CardBooking,
  CartTitleH2,
  CartTitleDiv,
  CartDiv,
  CartImg,
  CardBooking2Div,
  CardBooking2DivRight,
  SpanStar,
  SpanNumber,
  Address,
  Button,
  Price,
  PriceDiv,
  DivBr,
  TicketSpan,
  DivButton,
  CartContent,
  ButtonMore,
} from "./bookingHotel.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarker, faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function booking() {
  type propsData = {
    data: Array<string>;
  };

  type props = {
    listTicket: propsData;
  };

  const listHotel = useSelector((props: props) => props.listTicket.data);

  function currencyFormat(num: Number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <WrapperBooking id="hotel">
     
        <BookingHeader>
          <BookingHeaderH2>KHÁCH SẠN NỔI BẬT</BookingHeaderH2>
          <BookingHeaderSpan>
            Top những khách sạn phổ biến và được nhiều lựa chọn nhất
          </BookingHeaderSpan>
        </BookingHeader>
        <CartContent>
        {/* Column 1 */}
        {listHotel.map((value: any) => {
          const money = currencyFormat(value.price);

          if (value.bookHotel == true) {
            return (
              <CardBooking key={value._id}>
                <CartDiv>
                  <CartImg src={value.img} />
                </CartDiv>
                <CartTitleDiv>
                  <CartTitleH2>M Villas Phu Quoc</CartTitleH2>
                  <CardBooking2Div>
                    <CardBooking2DivRight>
                      <SpanStar>5</SpanStar>
                      <FontAwesomeIcon icon={faStar} color="orange" />
                      <SpanNumber>{value.numberReview} Đã đặt</SpanNumber>
                    </CardBooking2DivRight>

                    <CardBooking2DivRight>
                      <SpanNumber>Chi Tiết</SpanNumber>
                    </CardBooking2DivRight>
                  </CardBooking2Div>

                  <CardBooking2Div>
                    <FontAwesomeIcon icon={faMapMarker} />
                    <Address>{value.address}</Address>
                  </CardBooking2Div>

                  <PriceDiv>
                    <CardBooking2Div>
                      <Button color="#eba62d">
                        {" "}
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "100%",
                            height: "100%",
                          }}
                          to={`/book/${value._id}`}
                        >
                          Đặt Ngay
                        </NavLink>
                      </Button>
                    </CardBooking2Div>

                    <DivBr>
                      <Price about="22px">{money} đ</Price>
                      <TicketSpan about="16px">người/đêm</TicketSpan>
                    </DivBr>
                  </PriceDiv>
                </CartTitleDiv>
              </CardBooking>
            );
          }
        })}
        </CartContent>

        <DivButton>
          <ButtonMore color="#eba62d">
            <FontAwesomeIcon icon={faEye} /> Xem Thêm
          </ButtonMore>
        </DivButton>
      
    </WrapperBooking>
  );
}
