import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'


const Country = (props) => {

    const [weather, setWeather] = useState([])

    useEffect(()=> {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${props.country.capital}`)
        .then(response => setWeather(weather.concat(response.data)))
    },[])

    

    return (
        <div>
            <h1>{props.country.name}</h1>
            <p>capital {props.country.capital}
            <br></br>population {props.country.population}</p>
            <Languages languages={props.country.languages}/>
            <Flag flag={props.country.flag}/>
            {weather.map(info => 
            <Weather weather={info}/>)}
        </div>
    )
}

export default Country