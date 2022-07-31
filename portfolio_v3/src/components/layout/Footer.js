import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa';


function Footer() {
  return (
    <div className="lg:grid lg:grid-cols-4 bottom-0 bg-blue-600 p-8 text-white font-mono mt-8">
      <div className="lg:col-start-1 lg:col-end-2 border-r-2 text-center">
        <a href="/">Home</a>
        <br />
        <a href="/contact">Contact</a>
        <br />
        <a href="/resume">Resume/CV</a>
        <br />
        <a href="/work">Work</a>
        <br />
      </div>
      <div className="lg:col-start-2 lg:col-end-3 text-center border-r-2">
        <a href="https://bryan-fs-dev-blog.vercel.app/" target="blank">
          Blog
        </a>
        <br />

        <a href="https://www.github.com/bryan-huffstutler" target="blank">
          Github
        </a>
        <br />
      </div>
      <div className="lg:col-start-3 lg:col-end-4 text-right">
        <h1>Bryan Huffstutler</h1>
        <div>
          <a href="mailto:bhuff8404@gmail.com">
            <AiOutlineMail size="1.5em" className="inline" />
            <p className="inline">bhuff8404@gmail.com</p>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Bryan_FS_Dev" target="blank">
            <BsTwitter size="1.5em" className="inline"/>
            <p className="inline">@Bryan_FS_Dev</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/bryan-huffstutler" target="blank">
            <FaGithub size="1.5em" className="inline"/>
            <p className="inline">bryan-huffstutler</p>
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
