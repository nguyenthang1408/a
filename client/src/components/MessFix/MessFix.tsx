import React, { useEffect, useState } from "react";
import { ButtonMess, DivGoToTop, GoToTop } from "./MessFix.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function MessFix() {
  const [width, setWidth] = useState(window.scrollY);

  useEffect(() => {
    const handleWidth = () => setWidth(window.scrollY);
    window.addEventListener("scroll", handleWidth);
  }, [width]);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {width > 1000 && (
        <DivGoToTop>
          <GoToTop onClick={handleGoToTop}>
            <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" color="white" />
          </GoToTop>
        </DivGoToTop>
      )}
      <ButtonMess>
        <FontAwesomeIcon icon={faMessage} color="white" size="2x" />
      </ButtonMess>
      ;
    </>
  );
}
