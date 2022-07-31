

function About() {
  return (
    <div className="h-128">
      <div className="p-8 m-8 ml-20 leading-7 font-mono border-4">
        <div className="hidden 2xl:block 2xl:float-right 2xl:m-8">
          <img className='rounded-3xl' src="/images/pic-collage.png" alt="logo" width={350} height={350} />
        </div>
        <h1 className="text-3xl underline underline-offset-4 bg-yellow-300 p-1 text-black inline">
          About Me
        </h1>

        <p className="indent-6">
          Hi my name is Bryan! I'm a React.js Nerd who makes stuff for the web.
          The technologies I use primarily cater to Javascript and React in some
          way. I utilize the MERN (MongoDB, Express.js, React.js, and Node.js)
          stack to solve problems for companies, creating innovative solutions
          that get the job done!
        </p>

        <br />

        <p className="indent-6">
          My journey began on my own. I started with{" "}
          <span className="italic font-bold ml-1">
            "Head First: HTML and CSS"
          </span>{" "}
          and then went to
          <span className="italic font-bold ml-1">
            "Head First: JavaScript Programming."
          </span>{" "}
          Though these two were a great starting point in my journey, I felt
          like something was missing. So I decided to utilize my G.I. Bill and
          went to college for Advanced Full Stack Web Development at Bryan
          University.
        </p>

        <br />

        <p className="indent-6">
          While this path has been the road I have chosen, it has still been
          rough. The amount of hours spent working on my own, outside of having
          a full time job, four children, and all of the responsibilities that
          come with that, have taken it's toll. The end result, 100% worth it, I
          love making solutions for people.
        </p>
      </div>
    </div>
  );
}

export default About;
