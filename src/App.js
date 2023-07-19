import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
}
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1e192a';
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
  <BrowserRouter>
  <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3 mx-7">
    <Routes>
      <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
      <Route exact path="/About" element={ <div className="container">  <About mode={mode} />  </div>} />
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
