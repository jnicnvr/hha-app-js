import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Brand from "./Brand";
import Progressbar from "./Progressbar";
const Layout = ({ children }) => {
  return (
    <>
      <Progressbar />
      <div className='hold-transition sidebar-mini'>
        <div className='wrapper'>
          <Navbar />
          <aside className='main-sidebar sidebar-light-pink elevation-1'>
            <Brand />
            <Sidebar />
          </aside>
          <Content>{children}</Content>
          <aside className='control-sidebar control-sidebar-dark'></aside>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
