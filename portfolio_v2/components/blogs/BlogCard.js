function BlogCard(props) {
  const { date, description, image, isFeatured, source, title, _id, key } = props;
  const newDate = new Date(date);
  const dateData = newDate.toLocaleDateString();

  return (
    <div key={key} className="m-9 border-4 p-2">
      <a href={source} target="blank">
        <p>{title}</p>
        <p className="text-xs text-slate-400">{dateData}</p>
        <div className="border-b-2 border-black m-1"></div>
        <img src={image} alt="blog img" className="w-96 h-60"/>
        <div className="border-b-2 border-black m-1"></div>
        <p className="text-sm">{description}</p>
      </a>
    </div>
  );
}

export default BlogCard;
