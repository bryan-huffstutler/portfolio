import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";


function Navbar(props) {
  return (
    <div className="fixed top-0 w-screen grid grid-cols-3 bg-blue-600 text-neutral-200 z-50">
      <div className="col-start-1 col-end-2 ml-10 p-3 hidden md:block">
        <Link href="/">
          <a>
            <Image
              className="rounded-3xl inline"
              src="/images/B.png"
              alt="logo"
              width={35}
              height={35}
            />
            <h1 className="text-3xl inline">Bryan Huffstutler</h1>
          </a>
        </Link>
      </div>
      

      <div className="col-start-1 col-end-12 md:col-start-3 md:col-end-4 flex justify-between p-6 mr-9 ">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/resume">Resume/CV</Link>
      </div>

      <SearchBar handleTheme={props.handleTheme}/>
    </div>
  );
}

export default Navbar;
