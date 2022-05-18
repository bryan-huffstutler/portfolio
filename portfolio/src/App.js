import './App.css';
import React from 'react';
import Tools from './components/Tools';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <Navbar/>

      <Intro/>

      <Tools />

      <Projects/>

      <About/>
    </div>
  );
}

export default App;
