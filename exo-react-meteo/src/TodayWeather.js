import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class TodayWeather extends Component {
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
        console.log(data.current);
        if (Object.keys(data).length !== 0) {
            return (
                <div className='box-today'>
                    <div className="image-info">
                        <div className='image'>
                            <img src="http://openweathermap.org/img/wn/04d@4x.png" alt="" />
                        </div>
                        <div className='info'>
                            <h1>Ville</h1>
                            <h2>{Math.round(data.current.temp)}°C</h2>
                            <h2>Conditions</h2>
                        </div>
                    </div>
                </div>
            )
        } else {
            // Sinon j'affiche un loading
            return (<p>Loading...</p>);
        }

    }
}
