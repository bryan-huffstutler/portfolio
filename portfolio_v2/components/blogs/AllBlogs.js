import BlogCard from "./BlogCard";

function AllBlogs(props) {
  const { blogs } = props;

  return (
    <div className="lg:grid lg:grid-cols-4 p-8 m-8 ml-20 leading-7 font-mono border-4">
      <h1 className="lg:text-center lg:col-start-1 lg:col-end-5 text-3xl underline underline-offset-4 bg-yellow-300 p-1 text-black inline">
        All Blogs
      </h1>
      {blogs.map((blog) => (
        <BlogCard {...blog} />
      ))}
    </div>
  );
}

export default AllBlogs;
