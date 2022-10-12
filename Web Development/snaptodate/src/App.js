import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "./axios/axiosInstance";
function App() {

  useEffect(() => {
    axios.get("/").then(r => console.log(r));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Radhe Radhe
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
