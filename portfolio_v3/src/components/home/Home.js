import About from "./About";
import Intro from './Intro'
import FeaturedBlogs from '../blogs/FeaturedBlogs'

function Home() {
    return ( 
        <div className="mt-32">
            <Intro />

            <About/>

            <FeaturedBlogs />

        </div>
     );
}

export default Home;