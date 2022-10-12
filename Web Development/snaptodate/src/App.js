import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "./axios/axiosInstance";
function App() {

  useEffect(() => {
    axios.get("/").then(r => console.log("Done"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hare Krishna Hare Krishna Krishna Krishna Hare Hare
            Hare Rama Hare Rama Rama Rama Hare Hare
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
