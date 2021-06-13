import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import  Card from 'react-bootstrap/Card';

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
      <div style={{ width: '100%', color: 'white', backgroundColor:'gray' }}>
      <Card bg='dark' text= 'warning' border="danger" style={{ width: '100%', color: 'darkblue', fontSize:'bolder' }} >
   
        <form onSubmit={this.getCityName} >
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <label>Enter City name </label>
          <input  type='txet' placeholder='enter city name' onChange={this.setCityName}></input>
       
          <br></br>
        <input  type='submit' value='explore city'/>

        </Form.Group>
        
        </form>
        </Card>
        {this.state.display &&
          <div>

            <p>
            {this.state.cityData.display_name}
            </p>

            <img style={{width:'50%'}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} alt='' />

          </div>
        }
      </div>
     
    )
  }
}

export default App
