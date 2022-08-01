import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

function Navbar(props) {
  return (
    <div className="fixed top-0 w-screen grid grid-cols-3 bg-blue-600 text-neutral-200 z-50 p-4">
      <div className="col-start-1 col-end-2 ml-10 p-3 hidden md:block">
        <img src="/images/B.png" className="h-12 w-12 inline" alt="logo" />
        <Link to="/">
          <h1 className="text-3xl inline align-middle">Bryan Huffstutler</h1>
        </Link>
      </div>

      <div className="col-start-1 col-end-12 md:col-start-3 md:col-end-4 flex justify-between p-6 mr-9 font-bold">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <a
          href="https://bryan-fs-dev-blog.vercel.app/"
          className="hover:text-red-500"
          target="blank"
        >
          Blog
        </a>
        <Link to="/work" className="hover:text-red-500">
          Work
        </Link>
        <a href="mailto:bhuff8404@gmail.com" className="hover:text-red-500">
          <AiOutlineMail className="inline" size="1.5em" />
          Contact
        </a>
        <a
          href="Bryan Huffstutler1.docx"
          download
          rel="noopener noreferrer"
          target="blank"
          className="hover:text-red-500"
        >
          <AiOutlineDownload size="1.5em" className="inline" />
          Resume/CV
        </a>
      </div>

      {/* <SearchBar /> */}
    </div>
  );
}

export default Navbar;
