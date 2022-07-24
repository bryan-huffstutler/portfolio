import Image from "next/image";
import classes from './Intro.module.css'

function Intro() {
  return (
    <div className="ml-20 leading-7 font-sans border-4">
      <div className={classes.wrapper}>
        <div className={classes.statictxt}>I'm a</div>
        <ul className={classes.dynamictxts}>
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Blogger</span>
          </li>
          <li>
            <span>React Nerd</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
