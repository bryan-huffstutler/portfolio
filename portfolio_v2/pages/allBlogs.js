import AllBlogs from '../components/blogs/AllBlogs'
import blogDbConnect from "../utils/blogDbConnect";
import Blog from "../models/Blog";

function AllBlogsPage(props) {
  const blogs = JSON.parse(props.blogs);

  return (
    <div className="mt-36">
        <AllBlogs blogs={blogs} />
    </div>
  );
}

export default AllBlogsPage;

export async function getStaticProps(context) {
  blogDbConnect();
  const blogs = await Blog.find({ isFeatured: true });
  const json = JSON.stringify(blogs);

  return {
    props: {
      blogs: json,
    },
  };
}
