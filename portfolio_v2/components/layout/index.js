import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
