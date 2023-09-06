import React from "react";
import Home from "./components/home/Home";
import Blog from './components/blogs/Blog';
import ErrorPage from './components/ErrorPage'
import Work from './components/work/Work'
import { Link, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/work" element={<Work />}>Work</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
