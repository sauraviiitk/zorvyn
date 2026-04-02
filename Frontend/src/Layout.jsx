import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header/>
      
      <main className="min-h-screen p-6">
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;