import React, { Component } from "react";
import axios from "axios";
import './App.css';
import TodayWeather from './TodayWeather';

class App extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  render() {
    const data = this.state.data;


    // Checker que data est vide
    if (Object.keys(data).length !== 0) {
      const daysJSX = data.daily.map(day => {
        const dayName = new Date(day.dt * 1000).toLocaleString("fr-FR", { weekday: "long" });
        const temp = day.temp.day;
        const desc = day.weather[0].description;
        return <p>{dayName}: {temp}° / {desc}</p>;

      })

      // S'il est pas vide, alors this.state.data.current... a une valeur

      return (
        <div className="App">
          <form action="" className='input'>
            <input type="text" placeholder='longitude' />
            <input type="text" placeholder='latitude' />
            <input type="submit" />
            <div className='container'>

             
            </div>


          </form>
          <TodayWeather />


          <div className="group-day">
            <div className="day">{daysJSX[1]}</div>
            <div className="day">{daysJSX[2]}</div>
            <div className="day">{daysJSX[3]}</div>
            <div className="day">{daysJSX[4]}</div>


          </div>



          {/* <p>Météo d'Aujourd'hui:  {data.current.temp}°C / Ciel dégagé</p>  */}
          



        </div>
      );
    }
    else {
      // Sinon j'affiche un loading
      return (<p>Loading...</p>);
    }


  }
}

export default App;
