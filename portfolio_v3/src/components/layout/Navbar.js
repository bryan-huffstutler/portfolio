import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <div className="fixed top-0 w-screen grid grid-cols-3 bg-blue-600 text-neutral-200 z-50">
      <div className="col-start-1 col-end-2 ml-10 p-3 hidden md:block">
          <img src='/images/B.png' className="h-12 w-12 inline" alt="logo"/>
          <Link to='/'>
            <h1 className="text-3xl inline align-middle">Bryan Huffstutler</h1>
          </Link>

      </div>
      

      <div className="col-start-1 col-end-12 md:col-start-3 md:col-end-4 flex justify-between p-6 mr-9 font-bold">
        <Link to='/' className="hover:text-red-500">Home</Link>
        <Link to='/blogs' className="hover:text-red-500">Blog</Link>
        <Link to='/work' className="hover:text-red-500">Work</Link>
        <Link to='/resume'className="hover:text-red-500">Resume/CV</Link>
      </div>

      <SearchBar />
    </div>
  );
}

export default Navbar;
