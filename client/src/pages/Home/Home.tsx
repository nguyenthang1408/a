import React from "react";
import { Content, Img} from "./Home.styles";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import ImgAppMobile from "../../components/imgAppMobile/imgAppMobile";
import WrapperImgTour from "../../components/imageTour/imgTour";
import Booking from "../../components/booking/booking";
import BookingHotel from "../../components/bookingHotel/bookingHotel";
import Review from "../../components/review/review";
import Hot from "../../components/hot/hot";
import Popular from "../..//components/popular/popular";
import Register from "../../components/register/register";
import FooterFullPage from "../../components/FooterPage/FooterPage";
import MessFix from "../../components/MessFix/MessFix";

export default function Home() {
  return (
    <Content>
      <Img src="src/assets/banner-header.jpg" id="imgHeader" />
      <HeaderTitle />
      <ImgAppMobile />
      <WrapperImgTour />
      <Booking />
      
      <BookingHotel />
      <Review />
      <Hot />
      <Popular />
      <Register />
      {/* <FooterFullPage /> */}
      <MessFix />
    </Content>
  );
}
