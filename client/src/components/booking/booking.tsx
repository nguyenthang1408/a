import React, { useEffect, useState } from "react";
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
  CartImgShort,
  CardDivColumn,
  CardDivRow,
} from "./booking.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchTicket } from "../redux/Tickets/ticketSlice";
import { NavLink } from "react-router-dom";

export default function booking() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchTicket());
  }, []);

  const listTicket1 = useSelector((state: any) => state);

  const listTicket = useSelector((state: any) => state.listTicket.data);

  console.log(listTicket1);

  function currencyFormat(num: Number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <WrapperBooking id="tour">
      <BookingHeader>
        <BookingHeaderH2>TOUR TRONG NGÀY VÀ VÉ VUI CHƠI</BookingHeaderH2>
        <BookingHeaderSpan>
          Dịch vụ tour đảo và vé vinwonders, safari, cáp treo...
        </BookingHeaderSpan>
      </BookingHeader>
      <BookingContent>
        {/* Column 1 */}

        {listTicket.map((value: any) => {
          const money = currencyFormat(value.price);
          if (value.bookHotel == false) {
            return (
              <CardBooking key={value._id}>
                <CartDiv>
                  <CartImg src={value.img} />
                </CartDiv>
                <CartTitleDiv>
                  <CartTitleH2>{value.title}</CartTitleH2>
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
                      <TicketSpan about="16px">người/vé</TicketSpan>
                    </DivBr>
                  </PriceDiv>
                </CartTitleDiv>
              </CardBooking>
            );
          }
        })}

        {/* Column 2 */}

        {/* end */}
      </BookingContent>
    </WrapperBooking>
  );
}
