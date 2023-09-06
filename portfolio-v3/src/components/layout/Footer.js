import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa';
import {AiOutlineDownload} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa"

function Footer() {
  return (
    <div className="lg:grid lg:grid-cols-4 md:bottom-0 bg-blue-600 p-8 text-white font-mono mt-8">
      <div className="lg:col-start-1 lg:col-end-2 border-r-2 text-center leading-9">
        <a href="/"className="hover:text-red-500">Home</a>
        <br />
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
        <br />
        <a href="/work"className="hover:text-red-500">Work</a>
        <br />
      </div>
      <div className="lg:col-start-2 lg:col-end-3 text-center border-r-2 leading-9">
        <a href="https://bryan-fs-dev-blog.vercel.app/" target="blank"className="hover:text-red-500">
          Blog
        </a>
        <br />

        <a href="https://www.github.com/bryan-huffstutler" target="blank"className="hover:text-red-500">
          Github
        </a>
        <br />
      </div>
      <div className="lg:col-start-3 lg:col-end-4 text-right">
        
        <div>
          <a href="mailto:bhuff8404@gmail.com"className="hover:text-red-500">
            <AiOutlineMail size="1.5em" className="inline" />
            <p className="inline">bhuff8404@gmail.com</p>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Bryan_FS_Dev" target="blank"className="hover:text-red-500">
            <BsTwitter size="1.5em" className="inline"/>
            <p className="inline">@Bryan_FS_Dev</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/bryan-huffstutler" target="blank"className="hover:text-red-500">
            <FaGithub size="1.5em" className="inline"/>
            <p className="inline">bryan-huffstutler</p>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/bryan-huffstutler-637730197/"className="hover:text-red-500">
            <FaLinkedin size="1.5em" className="inline" />
            <p className="inline">Bryan Huffstutler</p>
          </a>
        </div>
      </div>
      
      <div className="lg:col-start-4 lg:col-end-5 justify-self-end">
        <img src="/images/B.png" alt="logo" width={100} height={90} />
      </div>
    </div>
  );
}

export default Footer;
