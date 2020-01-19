import React from 'react';
import './App.css';
import Header from './components/Weather/Header/index.jsx';
import CurrentDate from './components/Weather/CurrentDate/index.jsx';
import NextDate from './components/Weather/NextDate/index.jsx';

function App() {
  return (
    <div className="App">
      <div className="App-overlay">
        <div className="App-container">
          <div className="App-column">
            <Header />
            <CurrentDate />
          </div>
          <div className="App-column">
            {[20,21,22,23,24].map((day, num) => <NextDate key={num} day={day}/>)}
            <button className="App-search">Получить информацию</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
