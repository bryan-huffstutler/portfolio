import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
