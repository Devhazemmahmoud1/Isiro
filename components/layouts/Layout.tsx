import React from "react";
import type { AppProps } from "next/app";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  );
}
