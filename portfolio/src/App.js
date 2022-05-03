import './App.css';
import React from 'react';
import Tools from './components/Tools';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      <Navbar />

      <Intro />
      
      <Tools />
    </div>
  );
}

export default App;
