import React from "react";
import {
  DivRegister,
  DivHeaderRegister,
  RegisterH1,
  RegisterSpan,
  DivInput,
  DivFont,
  Input,
  ButtonRegister,
} from "./register.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function register() {
  return (
    <DivRegister>
      <DivHeaderRegister>
        <RegisterH1>
          Đăng Ký Để Nhận Thông Báo Mới Nhất Thông Qua Email
        </RegisterH1>
        <RegisterSpan>Những món quà ưu đãi hấp dẫn đang chờ bạn</RegisterSpan>

        <DivInput>
          <DivFont>
            <FontAwesomeIcon icon={faEnvelope} />
            <Input placeholder="Nhập Email Của Bạn" />
          </DivFont>
          <ButtonRegister>ĐĂNG KÝ</ButtonRegister>
        </DivInput>
      </DivHeaderRegister>
    </DivRegister>
  );
}
