import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'light';
    }
  }
  return (
    <>    
    <Navbar title="TextUtils" about="about Us" mode={mode} toggleMode={toggleMode}/> 
    {/* You pass the above "title" and "about" as props in the "Navbar.js" file */}
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
      </>
  );
}

export default App;
