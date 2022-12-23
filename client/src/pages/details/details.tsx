import React, { useState, useEffect } from "react";
import BookHotel from "./bookHotel/bookHotel";
import BookTicket from "./bookTicket/bookTicket";
import { Wrapper } from "./details.styles";
import { useDispatch, useSelector } from "react-redux";
import { numberTicket } from "../../components/redux/Tickets/numberTicket";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function details() {
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

  const param = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.post("http://localhost:5555/getBookId", {
      data: {
        id: param,
      },
    }).then((res) => setListBook(res.data));
  }, []);

  return (
    <Wrapper>
      {!listBook.bookHotel ? (
        <BookHotel></BookHotel>
      ) : (
        <BookTicket></BookTicket>
      )}
    </Wrapper>
  );
}
