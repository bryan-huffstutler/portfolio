import styles from "../styles/Home.module.css";
import About from "../components/home/About";
import Intro from "../components/home/Intro";
import blogDbConnect from '../utils/blogDbConnect'
import Blog from '../models/Blog'
import FeaturedBlogs from "../components/home/blogs/FeaturedBlogs";
import React, {useState} from 'react'

export default function Home(props) {
  const initInputs = {
    featuredBlogs: true,
    allBlogs: false
  }
  const [state, setState] = useState(initInputs)
  const blogs = JSON.parse(props.blogs)


  return (
    <div className='mt-20 lg:grid lg:grid-cols-4'>
      <div className='lg:col-start-1 lg:col-end-5 lg:row-start-1'>
        <Intro />
      </div>

      <div className='lg:col-start-1 lg:col-end-3'>
        <About />
      </div>

      <div className='lg:col-start-3 lg:col-end-5'>
        <FeaturedBlogs blogs={blogs}/>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  blogDbConnect()
  const blogs = await Blog.find({isFeatured: true})
  const json = JSON.stringify(blogs)


  return {
    props: {
      blogs: json,
    },
  };
}