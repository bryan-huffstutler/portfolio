import pictureOfMe from '../pic.jpg'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineDownload} from 'react-icons/ai'

function Intro() {
  return ( 
    <div id='intro-div'>
      <h2 id='full-name'>Bryan Huffstutler</h2>
      <img src={pictureOfMe} height='200px'/>
      <h3>Full Stack Developer</h3>
      <a href="https://www.linkedin.com/in/bryan-huffstutler-637730197/" target='_blank'><FaLinkedin size='2em' color='#0A66C2'/></a>
      <a href="https://github.com/bryan-huffstutler" target='_blank'><FaGithub size='2em' color='#161B22'/></a>
      <a href="mailto:bhuff8404@gmail.com"><AiOutlineMail size='2em' color='green'/></a>
      <a href='Bryan Huffstutler.pdf' download="BryanHuffstutler.pdf" id='resume-dl-link'><AiOutlineDownload size='2em'/>Resume</a>
    </div>
   );
}

export default Intro;