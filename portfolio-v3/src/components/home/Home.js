import About from "./About";
import Intro from "./Intro";
import FeaturedBlogs from "../blogs/FeaturedBlogs";
import {Timeline} from 'react-twitter-widgets'

function Home() {
  return (
    <div className='mt-20 lg:grid lg:grid-cols-4'>
      <div className='hidden md:block mt-16 lg:col-start-2 lg:col-end-5 lg:row-start-1'>
        <Intro />
      </div>
      <div className='lg:col-start-1 lg:col-end-3'>
        <About />
      </div>

      <div className='lg:col-start-3 lg:col-end-5'>
        <FeaturedBlogs />
      </div>

      <div className="mt-16 lg:col-start-1 lg:col-end-2 lg:row-start-1 ml-20">
        <Timeline dataSource={{souceType: 'profile', screenName: 'Bryan_FS_Dev'}} options={{height:400, width:500}}/>
      </div>
    </div>
  );
}

export default Home;
