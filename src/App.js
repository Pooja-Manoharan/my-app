import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {
        loading ? (
        <ClimbingBoxLoader color={"#c88640"} loading={loading} size={30} />
        ) : (

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> )
      }
      
    </div>
  );
}


export default App;
