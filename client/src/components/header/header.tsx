import React, { useState, useEffect } from "react";
import {
  Header,
  Header1,
  Nav,
  Ul,
  Li,
  NavLinkHeader,
  Button,
  Img,
  DivLogo,
  Svg,
  Path,
} from "./header.styles";
import { config } from "../../config/config";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"

export default function header() {

  const [width, setWidth] = useState(window.scrollY);

  useEffect(() => {
    const handleWidth = () => setWidth(window.scrollY);
    window.addEventListener("scroll", handleWidth);
  }, [width]);


  let location = useLocation();
  return (
    <>
    {width >= 30 ?  
        <Header1 id="che">
     
        <Nav>
          <DivLogo>
           <Img src="src/assets/logo.png" />
          </DivLogo>
       
         <input type="checkbox" id="check" />
         <label htmlFor="check" id="show"><FontAwesomeIcon icon={faBars}  /></label>
         <label htmlFor="check" id="hide"><FontAwesomeIcon icon={faXmark} /></label>
   
          <Ul>
            <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#imgHeader"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#imgHeader"
                >
                  Trang Chủ
                </NavLinkHeader>
              </Li>
              <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#img"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#img"
                >
                  Hình Ảnh
                </NavLinkHeader>
              </Li>
              <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#tour"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#tour"
                >
                  Tour Đảo
                </NavLinkHeader>
              </Li>
              <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#hotel"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#hotel"
                >
                  Khách Sạn
                </NavLinkHeader>
              </Li>
              <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#hot"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#hot"
                >
                  Khuyến Mãi
                </NavLinkHeader>
              </Li>
              <Li>
                <NavLinkHeader
                  className={
                    `${location.pathname}${location.hash}` === "/#popular"
                      ? "active"
                      : ""
                  }
                  smooth
                  to="#popular"
                >
                  Kinh Nghiệm
                </NavLinkHeader>
              </Li>
            <Button theme="#274A77">App</Button>
            
            
          <span></span>
          </Ul>
           
        </Nav>
      </Header1>



      : 



      <Header id="che">
     
      <Nav>
        <DivLogo>
         <Img src="src/assets/logo.png" />
        </DivLogo>
     
       <input type="checkbox" id="check" />
       <label htmlFor="check" id="show"><FontAwesomeIcon icon={faBars}  /></label>
       <label htmlFor="check" id="hide"><FontAwesomeIcon icon={faXmark} /></label>
 
        <Ul>
          <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#imgHeader"
                    ? "active"
                    : ""
                }
                smooth
                to="#imgHeader"
              >
                Trang Chủ
              </NavLinkHeader>
            </Li>
            <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#img"
                    ? "active"
                    : ""
                }
                smooth
                to="#img"
              >
                Hình Ảnh
              </NavLinkHeader>
            </Li>
            <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#tour"
                    ? "active"
                    : ""
                }
                smooth
                to="#tour"
              >
                Tour Đảo
              </NavLinkHeader>
            </Li>
            <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#hotel"
                    ? "active"
                    : ""
                }
                smooth
                to="#hotel"
              >
                Khách Sạn
              </NavLinkHeader>
            </Li>
            <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#hot"
                    ? "active"
                    : ""
                }
                smooth
                to="#hot"
              >
                Khuyến Mãi
              </NavLinkHeader>
            </Li>
            <Li>
              <NavLinkHeader
                className={
                  `${location.pathname}${location.hash}` === "/#popular"
                    ? "active"
                    : ""
                }
                smooth
                to="#popular"
              >
                Kinh Nghiệm
              </NavLinkHeader>
            </Li>
          <Button theme="#274A77">App</Button>
          
          
        <span></span>
        </Ul>
         
      </Nav>
    </Header>
    }
     
     <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50%" id="svg" viewBox="0 0 1440 350" className="transition duration-300 ease-in-out delay-150">

         <Path d="M 0,400 C 0,400 0,200 0,200 C 35.5235646909222,178.87867296779214 71.0471293818444,157.75734593558428 107,160 C 142.9528706181556,162.24265406441572 179.33504716354457,187.849289225455 220,215 C 260.6649528364554,242.150710774545 305.61268196397725,270.8454971625956 348,253 C 390.38731803602275,235.15450283740438 430.2142249805462,170.76872212416254 474,145 C 517.7857750194538,119.23127787583748 565.5304181138379,132.07961434075423 609,150 C 652.4695818861621,167.92038565924577 691.6641025641026,190.91282051282047 727,186 C 762.3358974358974,181.08717948717953 793.8131716297521,148.2691036079637 832,167 C 870.1868283702479,185.7308963920363 915.0832109168897,256.01076505532467 964,248 C 1012.9167890831103,239.98923494467536 1065.8539847026893,153.68783617073774 1099,155 C 1132.1460152973107,156.31216382926226 1145.500850272353,245.2378902617245 1184,261 C 1222.499149727647,276.7621097382755 1286.1426142078992,219.36060278236445 1333,197 C 1379.8573857921008,174.63939721763555 1409.9286928960505,187.31969860881776 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffffff" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"/>
    </Svg>
  
    </>
  );
}
