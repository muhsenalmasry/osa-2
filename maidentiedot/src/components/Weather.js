import React from 'react'

const Weather = (props) => {

    const { weather } = (props)
    
        return (
            <div>
                <h2>Weather in {weather.location.name}</h2>
                <p>
                    temperature: {weather.current.temperature} Celcius<br></br>
                    <img src={weather.current.weather_icons[0]} alt="weather_icons" />
                    <br></br>wind: {weather.current.wind_speed} direction {weather.current.wind_dir}
                </p>
            </div>
        )
    
}

export default Weather