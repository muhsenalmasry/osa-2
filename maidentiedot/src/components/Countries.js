import React from 'react'
import ReactDOM from 'react-dom'
import Country from './Country'

const Countries = (props) => {
    if (props.countriesToShow.length <= 10 &&
        props.countriesToShow.length > 1) {
            return (
                <div id="toShow">
                    {props.countriesToShow.map(country => {
                        return (
                            <p key={country.cioc}>
                                {country.name}<button onClick={()=>{
                                    const newContent = (<Country country={country}/>);
                                      ReactDOM.render(newContent, document.getElementById('toShow'));
                            }}>show</button>
                            </p>)
                    }
                    )}
                </div>
            )
    } else if (props.countriesToShow.length === 1) {
        return (
            <Country key={props.countriesToShow[0].cioc} country={props.countriesToShow[0]} />
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    
}

export default Countries