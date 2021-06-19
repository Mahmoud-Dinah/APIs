import React from 'react'

class Weather extends React.Component {
    render() {
        return (
            <div>
            <div>
                <p>
              {this.props.cityData.lat}
            </p>
            <p>
              {this.props.cityData.lon}
            </p> 
            </div>
            <div>
            {
              this.props.weatherData.map(weatherObj =>{
                return(
                <p>
                {weatherObj.description}
                <br></br>
                {weatherObj.date}
                <br></br>
         
                </p>
                )
              }) 

            }


            </div>
            </div>
        )
    }
}

export default Weather
