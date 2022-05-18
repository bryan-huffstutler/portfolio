import React, { useState } from "react";
import { DiNodejsSmall, DiMysql, DiJavascript1, DiHtml5, DiCss3, DiDjango, DiPython, DiMongodb, DiReact, DiNpm, DiGithubBadge, DiNginx } from "react-icons/di";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { SiJest,SiApache } from 'react-icons/si'


function Tools(props) {
    const [toggle, setToggle] = useState(false);

    return (
        <div id='tools-div'>
            {/* {toggle ? (
                <>
                    <div><span onClick={() => setToggle(!toggle)}><GoChevronDown /></span></div>
                    <a href='https://nodejs.org/en/' target='_blank'><DiNodejsSmall size="3em" color='#74AC63' /></a>
                    <a href='https://www.javascript.com/' target='_blank'><DiJavascript1 size='3em' color='#FCDC00' /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' target='_blank'><DiHtml5 size='3em' color='#E96228' /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><DiCss3 size='3em' color='#285FED' /></a>
                    <a href='https://www.djangoproject.com/' target='_blank'><DiDjango size='3em' color='#0C4B33' /></a>
                    <a href='https://www.python.org/' target='_blank'><DiPython size='3em' color='#3870A1' /></a>
                    <a href='https://www.mysql.com/' target='_blank'><DiMysql size='3em' color='#5E96A8' /></a>
                    <a href='https://www.mongodb.com/' target='_blank'><DiMongodb size='3em' color='#429543' /></a>
                    <a href='https://reactjs.org/' target='_blank'><DiReact size='3em' color='#5ED3F3' /></a>
                    <a href='https://www.npmjs.com/' target='_blank'><DiNpm size='3em' color='#CF5050' /></a>
                    <a href='https://github.com/' target='_blank'><DiGithubBadge size='3em' color='#161B22' /></a>
                    <a href='https://jestjs.io/' target='_blank'><SiJest size='3em' color='#A3606A' /></a>
                    <a href='https://www.nginx.com/' target='_blank'><DiNginx size='3em' color='#0D924B' /></a>
                    <a href='https://www.apache.org/' target='_blank'><SiApache size='3em' color='#E87521' /></a>
                </>
            ) : (
                <>
                    <div>
                        <span onClick={() => setToggle(!toggle)} style={{fontWeight:'700'}}><GoChevronRight size="1em" /></span><span>TOOLS</span>
                        
                    </div>
                </>
            )} */}
            <a href='https://nodejs.org/en/' target='_blank'><DiNodejsSmall size="3em" color='#74AC63' /></a>
                    <a href='https://www.javascript.com/' target='_blank'><DiJavascript1 size='3em' color='#FCDC00' /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' target='_blank'><DiHtml5 size='3em' color='#E96228' /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><DiCss3 size='3em' color='#285FED' /></a>
                    <a href='https://www.djangoproject.com/' target='_blank'><DiDjango size='3em' color='#0C4B33' /></a>
                    <a href='https://www.python.org/' target='_blank'><DiPython size='3em' color='#3870A1' /></a>
                    <a href='https://www.mysql.com/' target='_blank'><DiMysql size='3em' color='#5E96A8' /></a>
                    <a href='https://www.mongodb.com/' target='_blank'><DiMongodb size='3em' color='#429543' /></a>
                    <a href='https://reactjs.org/' target='_blank'><DiReact size='3em' color='#5ED3F3' /></a>
                    <a href='https://www.npmjs.com/' target='_blank'><DiNpm size='3em' color='#CF5050' /></a>
                    <a href='https://github.com/' target='_blank'><DiGithubBadge size='3em' color='#161B22' /></a>
                    <a href='https://jestjs.io/' target='_blank'><SiJest size='3em' color='#A3606A' /></a>
                    <a href='https://www.nginx.com/' target='_blank'><DiNginx size='3em' color='#0D924B' /></a>
                    <a href='https://www.apache.org/' target='_blank'><SiApache size='3em' color='#E87521' /></a>
        </div>
    );
}

export default Tools;
