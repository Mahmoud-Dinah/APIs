import React, { Component } from 'react'
import axios from 'axios';
import FormSelct from './compo/FormSelct';

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './compo/Weather';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      lat:'',
      lon:'',
      weatherData: [],
      display: false,

    }
  }

  setCityName = (e) => {
    this.setState({
      cityName: e.target.value,

    })
  }

  getCityName = async (e) => {
    e.preventDefault();

    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.63f6d30ca32ebd9db1c2265991c6c770&city=${this.state.cityName}&format=json`).then(locationResponse => {
      this.setState({
        cityData: locationResponse.data[0],
        lat: locationResponse.data[0].lat,
        lon: locationResponse.data[0].lon,
      });

      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherResponse => {
          
    this.setState({
      
      weatherData: weatherResponse.data,
      display: true,
    })


    });
  });
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ width: '100%', color: 'white', backgroundColor: 'gray' }}>
              <>
            < FormSelct
            setCityName = {this.setCityName}
            getCityName = {this.getCityName}
            />
            </>

        {this.state.display &&
          <div>

            <p>
              You searched For City :   <br></br>
              {this.state.cityData.display_name}
            </p>
            <br></br>
           <>
 
            <img style={{ width: '50%'}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} alt='' />
            </>
            <>
            < Weather 
            cityData = {this.state.cityData}
            weatherData = {this.state.weatherData}
           />
            </>

         
          </div>
        }
      </div>

    )
  }
}

export default App
