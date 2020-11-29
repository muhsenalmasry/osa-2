import React from 'react'

const Persons = (props) => {
    return (
        <div>
            {props.personsToShow.map(person =>
                <p>{person.name} {person.number}</p>
            )}
        </div>
    )
}

export default Persons