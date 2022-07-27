import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="lg:grid lg:grid-cols-3 bottom-0 bg-blue-600 p-8 text-white font-mono">
      <div className="lg:col-start-1 lg:col-end-2">
        <Link href="/">Home</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        <Link href="/resume">Resume/CV</Link>
        <br />
        <Link href="/work">Work</Link>
        <br />
      </div>

      <div className="lg:col-start-2 lg:col-end-3">
        <Link href="https://bryan-fs-dev-blog.vercel.app/">
        <a target="blank">
          Blog
        </a></Link>
        <br />
        <Link href="https://www.github.com/bryan-huffstutler">
          <a target="blank">Github</a>
        </Link><br/>
        <Link href='/allBlogs'>
          All Blogs
        </Link>
      </div>

      <div className="lg:col-start-3 lg:col-end-4 justify-self-end">
        <Image src="/images/b.png" alt="logo" width={120} height={90} />
      </div>
    </div>
  );
}

export default Footer;
