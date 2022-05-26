import React from 'react'
import ImageReel from './ImageReel/ImageReel'
import { bbs, rtv } from './ImageReel/image-data'
import { GoChevronRight, GoChevronDown } from "react-icons/go";

function Projects(props) {
    const [toggle, setToggle] = React.useState(false)

    return (
        <div id='projects-container'>
            <div className='projects-480'>
                {toggle ?
                    <>
                        <div style={{ backgroundColor: 'red' }} onClick={() => setToggle(!toggle)}>
                            <span>
                                <GoChevronDown size='1.6em' />
                            </span>
                            <span style={{ fontSize: '30px', fontWeight: '700' }}>
                                PROJECTS
                            </span>
                        </div>
                        <div>
                            <div className='project-container'>
                                <h2>BBs Sports Bar</h2>
                                <div className='project'>
                                    <ImageReel imgReel={bbs} />
                                    <p>
                                        This project was created for a sports bar named BBs in St. Louis, MO.
                                        The website has a public view and an admin/employee view as well.
                                        Changes made on the admin side of the website reflect on the live
                                        version of the public side. I.e. manager changes a menu item in the admin
                                        panel and the change is reflected on the live site. Admin panel also
                                        has the ability to add employees, create their usernames, and manage time off
                                        requests from the employees. The employee panel allows the employee to change
                                        their personal information, request timeoff, and view their available vacation
                                        time, sick time and personal time.
                                    </p>
                                    <h5>Technologies utilized: React, Node, MongoDB</h5>
                                </div>

                            </div>

                            <div className='project-container'>

                                <div className='project2'>
                                    <h2>Rock The Vote</h2>
                                    <ImageReel imgReel={rtv} />
                                    <p>A political 'social media' like project. Users can sign up, and login to
                                        view posts, create posts, like and dislike posts and leave comments. The
                                        public side is where they see all posts from all users, while the profile
                                        side is where they see only their posts and comments. The user can then
                                        delete, update, and manage their posts and likes/dislikes from here.
                                    </p>
                                    <h5>Technologies utilized: React, Node, MongoDB</h5>

                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div onClick={() => setToggle(!toggle)}>
                            <span>
                                <GoChevronRight size='1.6em' />
                            </span>
                            <span style={{ fontSize: '30px', fontWeight: '700' }}>
                                PROJECTS
                            </span>
                        </div>
                    </>}
            </div>


            <div className='projects-above-480'>
                <h1>Projects</h1>
                <div className='project-container'>
                    <h2>BBs Sports Bar</h2>
                    <div className='project'>
                        <ImageReel imgReel={bbs} />
                        <p>
                            This project was created for a sports bar named BBs in St. Louis, MO.
                            The website has a public view and an admin/employee view as well.
                            Changes made on the admin side of the website reflect on the live
                            version of the public side. I.e. manager changes a menu item in the admin
                            panel and the change is reflected on the live site. Admin panel also
                            has the ability to add employees, create their usernames, and manage time off
                            requests from the employees. The employee panel allows the employee to change
                            their personal information, request timeoff, and view their available vacation
                            time, sick time and personal time.
                        </p>
                        <h5>Technologies utilized: React, Node, MongoDB</h5>
                    </div>

                </div>

                <div className='project-container'>
                    <h2 style={{ justifyContent: 'flex-end', display: 'flex' }}>Rock The Vote</h2>
                    <div className='project2'>
                        <p>A political 'social media' like project. Users can sign up, and login to
                            view posts, create posts, like and dislike posts and leave comments. The
                            public side is where they see all posts from all users, while the profile
                            side is where they see only their posts and comments. The user can then
                            delete, update, and manage their posts and likes/dislikes from here.
                        </p>
                        <h5>Technologies utilized: React, Node, MongoDB</h5>
                        <ImageReel imgReel={rtv} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;