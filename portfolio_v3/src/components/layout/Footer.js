function Footer() {
  return (
    <div className="lg:grid lg:grid-cols-3 bottom-0 bg-blue-600 p-8 text-white font-mono mt-8">
      <div className="lg:col-start-1 lg:col-end-2 border-r-2 text-center">
        <a href="/">Home</a>
        <br />
        <a href="/contact">Contact</a>
        <br />
        <a href="/resume">Resume/CV</a>
        <br />
        <a href="/work">Work</a>
        <br />
      </div>

      <div className="lg:col-start-2 lg:col-end-3 text-center">
        <a href="https://bryan-fs-dev-blog.vercel.app/" target="blank">
          Blog
        </a>
        <br />

        <a href="https://www.github.com/bryan-huffstutler" target="blank">
          Github
        </a>
        <br />
      </div>

      <div className="lg:col-start-3 lg:col-end-4 justify-self-end">
        <img src="/images/B.png" alt="logo" width={100} height={90} />
      </div>
    </div>
  );
}

export default Footer;
