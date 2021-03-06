import './App.css';
import React from 'react';
import Tools from './components/Tools';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Badges from './components/Badges';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app-div'>
      <Navbar />
      <div className='intro-tools-div'>
        <Intro />

        <Tools />
      </div>


      <Projects />

      <About />

      <Badges />

      <Footer />
    </div>
  );
}

export default App;
