import { BsTwitter } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function Sidebar() {
  return (
    <div className="fixed top-40 p-5 z-50">
      <a className="text-blue-500 float-left md:float-none" href="https://twitter.com/Bryan_FS_Dev" target="blank">
        <BsTwitter size='2em'/>
      </a><br/>
      <a className="text-green-700 float-left md:float-none" href="https://github.com/bryan-huffstutler" target="blank">
        <FaGithub size='2em'/>
      </a><br/>
      <a className="text-sky-700 float-left md:float-none" href="https://www.linkedin.com/in/bryan-huffstutler-637730197/" target="blank">
        <FaLinkedin size='2em'/>
      </a><br/>
      
    </div>
  );
}

export default Sidebar;