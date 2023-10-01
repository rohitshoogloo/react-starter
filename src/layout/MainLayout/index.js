import React from "react";
import { Outlet } from "react-router-dom";

//common
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const MainLayout = () => {

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
