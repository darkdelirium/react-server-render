import React from 'react';
import { DatePicker } from 'antd';
import './App.css';
//import 'antd/dist/antd.css';
//import './antd.css'
import '../node_modules/antd/dist/antd.css'

function App() {
  const test = "test string"
  const test2 = "test string 2"
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          React server rendering test {test} <br />
          {test2}<br />
          test
          <DatePicker />

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
