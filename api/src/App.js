import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      cityName: '',
      cityData: {},
      display: false,

    }
  }

  setCityName = (e) =>{
    this.setState({
      cityName : e.target.value,
     
    })
  }

  getCityName = async (e) =>{
    e.preventDefault();

const axiosApi = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.63f6d30ca32ebd9db1c2265991c6c770&city=${this.state.cityName}&format=json`);

console.log(axiosApi);

this.setState({
  cityData: axiosApi.data[0],
  display: true,
})

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.getCityName}>
          <label>Enter City name</label>
          <input type='txet' placeholder='enter city name' onChange={this.setCityName}></input>
          <br></br>
          <br></br>
        <input type='submit' value='explore city'/>


        </form>
        {this.state.display &&
          <div>

            <p>
            {this.state.cityData.display_name}
            </p>
          </div>
        }
      </div>
    )
  }
}

export default App
