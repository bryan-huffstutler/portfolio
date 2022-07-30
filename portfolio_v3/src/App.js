import React from "react";
import Home from "./components/home/Home";
import Blog from './components/blogs/Blog';
import ErrorPage from './components/ErrorPage'
import Work from './components/work/Work'
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/blogs" element={<Blog />}>Blogs</Route>
        <Route path="/work" element={<Work />}>Work</Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
