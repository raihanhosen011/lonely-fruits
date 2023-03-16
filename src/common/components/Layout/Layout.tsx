import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";
// default layout configuration
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
