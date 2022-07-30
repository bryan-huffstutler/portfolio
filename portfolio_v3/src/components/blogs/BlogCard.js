import React from 'react'

function BlogCard(props) {
  const {
    pubDate,
    title,
    thumbnail,
    link,
    categories,
    author,
    content,
    description,
  } = props;

  const date = pubDate.slice(0,10)

  return (
    <div className="m-9 border-4 p-2">
      <a href={link} target="blank">
        <h1 className="text-xl">{title}</h1>
        <div className="border"></div>
        <p className="text-xs">{date}</p>
        <img src={thumbnail} alt="blog-pic" className="p-2"/>
      </a>
    </div>
  );
}

export default BlogCard;
