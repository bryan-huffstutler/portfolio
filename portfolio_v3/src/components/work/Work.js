import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FaReact} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'

function Work() {
  return (
    <div className="mt-36">
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

          <p className="p-4 text-center leading-9 text-lg">
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
            the live website.
          </p>
          <p className="text-left text-xl font-bold">Created with:</p>
          <div className="ml-5 flex justify-around">
            <FaReact size='4em'  className='inline text-blue-400'/>
            <SiExpress size='4em' className='inline'/>
            <SiMongodb size='4em' className='inline text-green-800'/>
            <IoLogoNodejs size='4em' className='inline text-yellow-500'/>
          </div>
        </div>
      </div>
      Work
    </div>
  );
}

export default Work;
