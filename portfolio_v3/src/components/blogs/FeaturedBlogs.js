import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function FeaturedBlogs(props) {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bhuff8404&api_key=yuyvydxbl7tdv33kvrr5zfs8wy6rrrjpwvlwipzm&order_by=pubDate&order_dir=desc"
      )
      .then((res) => setBlogs(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-8 m-8 ml-20 leading-7 font-mono border-4 lg:grid lg:grid-cols-2">
      <div className="lg:col-start-1 lg:col-end-3 lg:grid lg:grid-cols-2">
        <p className="text-3xl underline text-center underline-offset-4 bg-lime-300 inline p-1 text-black">
          Recent Blogs
        </p>
        <a className="justify-self-end" href="/allBlogs">
          <button className="justify-self-end border-2 bg-blue-600 text-white p-2 rounded-lg">
            All Blogs
          </button>
        </a>
      </div>
      {blogs ? blogs.map((blog) => <BlogCard {...blog} />) : "Loading..."}
    </div>
  );
}

export default FeaturedBlogs;
