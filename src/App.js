import React, { Component } from 'react';
import './App.css';
import Header from './components/Weather/Header/index.jsx';
import CurrentDate from './components/Weather/CurrentDate/index.jsx';
import NextDate from './components/Weather/NextDate/index.jsx';
import axios from 'axios';

class App extends Component {
  state = {
    countExtraDays: 5,
    nextDays: [],
    currentDay: {},
  }

  getWeather = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        axios.get(`http://localhost:3001/api/weather?latt=${latitude}&long=${longitude}`)
          .then(res => {
            const { data } = res;

            this.setState({
              city: data.city,
              currentDay: data.currentDay,
              nextDays: data.nextDays,
            });
          })
      },
      (error) => {
        console.error('User locked posibility to get geolocation info')
      }
    );
  }

  createExtraDays = () => {
    let days = [];

    for (let i = 0; i < this.state.countExtraDays; i++) {
      const info = this.state.nextDays[i];

      days.push(
        <NextDate
          key={ i + 1 }
          dayDiff={ i + 1 }
          temp={ info ? info.temp : undefined }
          minTemp={ info ? info.minTemp : undefined }
          maxTemp={ info ? info.maxTemp : undefined }
          wind={ info ? info.wind : undefined }
          windDirection={ info ? info.windDirection : undefined }
          img={ info ? info.img : undefined }
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
                temp={ this.state.currentDay.temp }
                minTemp={ this.state.currentDay.minTemp }
                maxTemp={ this.state.currentDay.maxTemp }
                wind={ this.state.currentDay.wind }
                windDirection={ this.state.currentDay.windDirection }
                img={ this.state.currentDay.img }
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
