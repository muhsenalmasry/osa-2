import React from 'react'
import personService from '../services/person'

const Persons = (props) => {
    

    return (
        <div>
            <p>
                {props.person.name} {props.person.number}
                <button className="button" onClick={props.handleClick}>delete</button>
            </p>
        </div>
    )
}

export default Persons