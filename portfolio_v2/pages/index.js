import styles from "../styles/Home.module.css";
import mongoose from "mongoose";
import About from "../components/home/About";
import Intro from "../components/home/Intro";

export default function Home(props) {
  return (
    <div className='mt-20 grid lg:grid-cols-4'>
      <div className='lg:col-start-1 lg:col-end-5 lg:row-start-1'>
        <Intro />
      </div>

      <div className='lg:col-start-1 lg:col-end-3'>
        <About />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      blogs: "BLOGGIE BLOGS",
    },
  };
}

// import mongoose from 'mongoose'

// const connection = {};

// async function dbConnect() {
//     if(connection.isConnected) {
//         return;
//     }

//     const db = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

//     connection.isConnected = db.connections[0].readyState;
//     console.log(connection.isConnected)
// }

// export default dbConnect;
