import React, { Component } from 'react';
import './App.css';
import Header from './components/Weather/Header/index.jsx';
import CurrentDate from './components/Weather/CurrentDate/index.jsx';
import NextDate from './components/Weather/NextDate/index.jsx';

class App extends Component {
  state = {
    countExtraDays: 5,
    nextDays: [],
  }

  getWeather = () => {

  }

  createExtraDays = () => {
    let days = [];

    for (let i = 0; i < this.state.countExtraDays; i++) {
      const info = this.state.nextDays[i];

      days.push(
        <NextDate
          key={ i + 1 }
          dayDiff={ i + 1 }
          minTemp={ info ? info.minTemp : undefined }
          maxTemp={ info ? info.maxTemp : undefined }
          wind={ info ? info.wind : undefined }
          windDirection={ info ? info.windDirection : undefined }
        />);
    }

    return days;
  }

  render() {
    return (
      <div className="App">
        <div className="App-overlay">
          <div className="App-container">
            <div className="App-column">
              <Header
                city={ this.state.city }
                country={ this.state.country }
              />
              <CurrentDate
                temp={ this.state.temp }
                minTemp={ this.state.minTemp }
                maxTemp={ this.state.maxTemp }
                wind={ this.state.wind }
                windDirection={ this.state.windDirection }
              />
            </div>
            <div className="App-column">
              { this.createExtraDays() }
              <button
                className="App-search"
                onClick={this.getWeather}
              >Get information</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
