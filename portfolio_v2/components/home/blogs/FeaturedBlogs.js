import BlogCard from "./BlogCard";

function FeaturedBlogs(props) {
  const { blogs } = props;

  return (
    <div className="p-8 m-8 ml-20 leading-7 font-mono border-4 lg:grid lg:grid-cols-2">
      <div className ="lg:col-start-1 lg:col-end-3 lg:grid lg:grid-cols-2">
        <p className="text-3xl underline underline-offset-4 bg-lime-300 inline p-1 text-black">
          Recent Blogs
        </p>
        <a className="justify-self-end" href='/allBlogs'>
            <button className="justify-self-end border-2 bg-blue-600 text-white p-2 rounded-lg">All Blogs</button>
        </a>
        
      </div>

      {blogs.map((blog) => {
        return <BlogCard key={blog._id} {...blog} />;
      })}
    </div>
  );
}

export default FeaturedBlogs;
