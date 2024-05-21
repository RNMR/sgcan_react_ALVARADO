import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [vid, setVid] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/transcripts/").then( res => res.json() ).then(data => {
      console.log(data)
      setVid(data)
    }).catch(err => {
      console.log(err.message)
    })
    
  })
  const catchVideo = () => {
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <video height="1080" width="720">
        <source src={""}
        />
      </video>
      {if(vid) {
        return (
          
        )
      }}
      <pre>
        {JSON.stringify(vid)}
      </pre>
    </div>
  );
}

export default App;
