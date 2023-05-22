import React, { Component } from 'react'
import axios from "axios";
import './App.css';

export default class OtherDayWeather extends Component {
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
      this.sta
        return (
            <div>
                <div className="group-day">
            <div className="day">{daysJSX[1]}</div>
            <div className="day">{daysJSX[2]}</div>
            <div className="day">{daysJSX[3]}</div>
            <div className="day">{daysJSX[4]}</div>


          </div>

            </div>
        )
    }
}

