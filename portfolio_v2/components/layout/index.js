import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import React, {useState} from 'react'

function Layout(props) {
  const [theme, setTheme] = useState(false)

  function handleTheme() {
    setTheme(!theme)
  }
  
  return (
    <div>
      <Navbar handleTheme={handleTheme}/>
      <main className={theme ? 'bg-gray-800 text-white' : 'bg-white'}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
