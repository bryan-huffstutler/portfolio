import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {SiHtml5} from "react-icons/si";


function Work() {
  return (
    <div className="mt-36 font-mono">
      {/* bbs-bar */}
      <div className="border-4 lg:grid lg:grid-cols-2 ml-20">
        <div className="lg:col-start-1 lg:col-end-2 m-4">
          <Carousel>
            <div>
              <img src="images/BBs/Home_Page.PNG" alt="bbs-home" />
              <p className="text-sm">Home Page</p>
            </div>
            <div>
              <img src="images/BBs/Menu_Page.PNG" alt="bbs-menu" />
              <p className="text-sm">Menu Page</p>
            </div>
            <div>
              <img src="images/BBs/Events_Page.PNG" alt="bbs-events" />
              <p className="text-sm">Events Page</p>
            </div>
            <div>
              <img src="images/BBs/About_Page.PNG" alt="bbs-about" />
              <p className="text-sm">About Page</p>
            </div>
            <div>
              <img src="images/BBs/Manager_Login.PNG" alt="bbs-manager-login" />
              <p className="text-sm">Manager/Admin Login Page</p>
            </div>
            <div>
              <img
                src="images/BBs/Employee_Login.PNG"
                alt="bbs-employee-login"
              />
              <p className="text-sm">Employee Login Page</p>
            </div>
            <div>
              <img src="images/BBs/Admin_Menu.PNG" alt="bbs-admin-menu" />
              <p className="text-sm">Admin Menu Page</p>
            </div>
            <div>
              <img src="images/BBs/Admin_Events.PNG" alt="bbs-admin-events" />
              <p className="text-sm">Admin Events Page</p>
            </div>
            <div>
              <img
                src="images/BBs/Admin_Employee.PNG"
                alt="bbs-admin-employee"
              />
              <p className="text-sm">Admin Employee Page</p>
            </div>
          </Carousel>
        </div>
        <div className="lg:col-start-2 lg:col-end-3">
          <h1 className="text-center text-2xl p-2 m-4 underline-offset-2 underline bg-green-400">
            BB's Sports Bar
          </h1>

          <p className="p-4 text-center leading-loose text-2xl">
            This project was created for a small sports in St Louis, MO. It
            provides the Manager's/Admin a mini HR GUI through the admin panel
            to handle employee logins, PTO requests, and allows the
            Manager/Admin to view employee available time-off such as Sick time.
            This solution also provides the client with a way to modify the
            website themselves via the Admin Panel. Inside the Admin Panel the
            Manager can make changes to the Menu, via category selections, via
            single item updates (such as price), and remove the item from the
            Menu. The Manager can also add, edit, and remove Events from the
            website. Changes made to the Menu and Events page are reflected in
            the live website. <a href="https://bbs-restaurant.herokuapp.com/" className="hover:text-lime-500 text-red-500" target="blank">View Live</a>
          </p>
        </div>
        <div className="text-center lg:col-start-1 lg:col-end-4 m-4">
          <p className=" text-xl font-bold text-red-500">Created With</p>
          <div className="ml-5 flex justify-around">
            <FaReact size="4em" className="inline text-blue-400" />
            <SiExpress size="4em" className="inline" />
            <SiMongodb size="4em" className="inline text-green-800" />
            <IoLogoNodejs size="4em" className="inline text-yellow-500" />
          </div>
        </div>
      </div>

      {/* blog-nextjs */}
      <div className="border-4 lg:grid lg:grid-cols-2 ml-20 mt-10">
        
        <div className="lg:col-start-1 lg:col-end-2">
          <h1 className="text-center text-2xl p-2 m-4 underline-offset-2 underline bg-orange-500">
            @Bryan_FS_Dev Blog
          </h1>

          <p className="p-4 text-center leading-loose text-2xl">
            I wanted to make my own blog website, and learn a new technology at the same time...so I created this blog with Next.js.
            This app utilizes the Nextjs framework for the front-end, routing, React, and pre-rendering. I decided to utilize MongoDB Atlas for the database.
            This web-app also has an admin panel that allows myself to login and add new blogs to the database as well. From the admin panel I can pick and choose
            which blogs are featured, add and delete blogs as well. <a href="https://bryan-fs-dev-blog.vercel.app/" className="hover:text-lime-500 text-red-500" target="blank">Deployed on Vercel.</a>
          </p>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 m-4">
          <Carousel>
            <div>
              <img src="images/BlogNextjs/Home.PNG" alt="blog-home" />
              <p className="text-sm">Home Page</p>
            </div>
            <div>
              <img src="images/BlogNextjs/all-blogs.PNG" alt="all-blogs-page" />
              <p className="text-sm">All Blogs Page</p>
            </div>
            <div>
              <img src="images/BlogNextjs/admin-login.PNG" alt="blog-admin-login" />
              <p className="text-sm">Admin Login Page</p>
            </div>
            <div>
              <img src="images/BlogNextjs/admin-panel.PNG" alt="admin-panel" />
              <p className="text-sm">Admin Panel</p>
            </div>
          </Carousel>
        </div>
        <div className="text-center lg:col-start-1 lg:col-end-4 m-4">
          <p className=" text-xl font-bold text-red-500">Created With</p>
          <div className="ml-5 flex justify-around">
            <SiNextdotjs size="4em" className="inline text-indigo-900" />
            <SiMongodb size="4em" className="inline text-green-800" />
            <IoLogoNodejs size="4em" className="inline text-yellow-500" />
          </div>
        </div>
      </div>

      {/* nutri-app */}
      <div className="border-4 lg:grid lg:grid-cols-2 ml-20 mt-10">
        
        <div className="lg:col-start-1 lg:col-end-2 m-4">
          <Carousel>
            <div>
              <img src="images/NutriApp/login_screen.PNG" alt="login-screen" />
              <p className="text-sm">Login Screen</p>
            </div>
            <div>
              <img
                src="images/NutriApp/recipes_searched.PNG"
                alt="searched-recipes"
              />
              <p className="text-sm">Searched Recipes</p>
            </div>
            <div>
              <img
                src="images/NutriApp/saved_recipes.PNG"
                alt="saved-recipes"
              />
              <p className="text-sm">Saved Recipes</p>
            </div>
          </Carousel>
        </div>
        <div className="lg:col-start-2 lg:col-end-3">
          <h1 className="text-center text-2xl p-2 m-4 underline-offset-2 underline bg-red-300">
            Nutri-App
          </h1>

          <p className="p-4 text-center leading-loose text-2xl align-middle">
            I created this web app because I wanted to learn how to integrate
            third party API's into a MERN full-stack application. I decided to
            do so with a project that most developers do at some point when
            learning, a recipe book app. This web app integrates RapidAPI.com's
            Spoonacular API. Front end requests are routed through Express
            server, served up with Node, and the user can save their favorite
            recipes to MongoDB. The recipes are then associated with their own
            user information. This project taught me a few things about MongoDB
            I didn't know about, including Document relations, and also learned
            things about creating an API of my own.
          </p>
        </div>
        <div className="text-center lg:col-start-1 lg:col-end-4 m-4">
          <p className=" text-xl font-bold text-red-500">Created With</p>
          <div className="ml-5 flex justify-around">
            <FaReact size="4em" className="inline text-blue-400" />
            <SiExpress size="4em" className="inline" />
            <SiMongodb size="4em" className="inline text-green-800" />
            <IoLogoNodejs size="4em" className="inline text-yellow-500" />
          </div>
        </div>
      </div>

      {/* rtv */}
      <div className="border-4 lg:grid lg:grid-cols-2 ml-20 mt-10">
        <div className="lg:col-start-1 lg:col-end-2">
          <h1 className="text-center text-2xl p-2 m-4 underline-offset-2 underline bg-cyan-5001">
            Rock The Vote
          </h1>

          <p className="p-4 text-center leading-loose text-2xl align-middle">
            This is one of my first full-stack web applications. This app is a social media website but for political views.
            Created with React for the front-end, Node and Express for the backend with MongoDB for the database. It allows
            a user to login/create a username, then they are able to view others posts, comment, and comment on others comments as well. 
            They can also like/dislike posts and comments. Once the user is logged in they can view their own profile page, where they
            can see all of their own posts and all of the comments they have left. They can also edit any post or comment, and delete 
            any post or comment.
          </p>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 m-4">
          <Carousel>
            <div>
              <img src="images/RTV/Main_Page.PNG" alt="home-page" />
              <p className="text-sm">Home Page after Login</p>
            </div>
            <div>
              <img
                src="images/RTV/Post_With_Comment.PNG"
                alt="Post with Comment"
              />
              <p className="text-sm">Post With Comment</p>
            </div>
            <div>
              <img
                src="images/RTV/Profile_Page.PNG"
                alt="profile-page"
              />
              <p className="text-sm">Profile Page</p>
            </div>
            <div>
              <img
                src="images/RTV/Rock_The_Vote_Home.PNG"
                alt="home-page"
              />
              <p className="text-sm">Home Page</p>
            </div>
          </Carousel>
        </div>
        <div className="text-center lg:col-start-1 lg:col-end-4 m-4">
          <p className=" text-xl font-bold text-red-500">Created With</p>
          <div className="ml-5 flex justify-around">
            <FaReact size="4em" className="inline text-blue-400" />
            <SiExpress size="4em" className="inline" />
            <SiMongodb size="4em" className="inline text-green-800" />
            <IoLogoNodejs size="4em" className="inline text-yellow-500" />
          </div>
        </div>
      </div>

      {/* typing-tester */}
      <div className="border-4 lg:grid lg:grid-cols-2 ml-20 mt-10">
        
        <div className="lg:col-start-1 lg:col-end-2 m-4">
          <Carousel>
            <div>
              <img src="images/typing-tester/Capture.PNG" alt="home-page" />
              <p className="text-sm">Home Page</p>
            </div>
            <div>
              <img
                src="images/typing-tester/Errors.PNG"
                alt="errors"
              />
              <p className="text-sm">Errors Display Red</p>
            </div>
            <div>
              <img
                src="images/typing-tester/finished.PNG"
                alt="finished"
              />
              <p className="text-sm">Stats Display On Completion</p>
            </div>
          </Carousel>
        </div>
        <div className="lg:col-start-2 lg:col-end-3">
          <h1 className="text-center text-2xl p-2 m-4 underline-offset-2 underline bg-cyan-5001">
            Typing-Tester
          </h1>

          <p className="p-4 text-center leading-loose text-2xl align-middle">
            Typing-tester was created using HTML, CSS and JavaScript only. This was an exercise for myself
            to better understand DOM Manipulation in my early months of learning JavaScript. While it was 
            created early it taught me a lot of fundamentals, and taught me how to deploy static websites to 
            Heroku. 
          </p>
          <p className="text-center"><a href="http://typing-tester.herokuapp.com/" className="hover:text-lime-500 text-2xl text-red-500" target="blank">Live Site</a></p>
        </div>
        <div className="text-center lg:col-start-1 lg:col-end-4 m-4">
          <p className=" text-xl font-bold text-red-500">Created With</p>
          <div className="ml-5 flex justify-around">
            <SiHtml5 size='4em' className=" text-orange-500"/>
            <SiCss3 size='4em' className=" text-blue-500"/>
            <SiJavascript size='4em' className="text-yellow-400"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
