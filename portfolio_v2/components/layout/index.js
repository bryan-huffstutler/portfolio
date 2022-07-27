import Navbar from "../navbar/Navbar";
import Sidebar from '../sidebar/Sidebar'
import React from 'react'
import Footer from "./Footer";

function Layout(props) {
  
  return (
    <div>
      <Navbar/>
      <main>{props.children}</main>
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Layout;
