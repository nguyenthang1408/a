import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  DefaultLayout,
  WrapperHeader,
  WrapperContent,
} from "./defaultLayout.styles";

type Props = {
  children: JSX.Element;
};

export default function defaultLayout({ children }: Props) {
  return (
    <DefaultLayout>
      <Header />
      {children}
      <Footer />
    </DefaultLayout>
  );
}
