import React from 'react'
import Language from './Language'

const Languages = (props) => {
    return(
        <div>
            <h2>Languages</h2>
            <ul>
                {props.languages.map(language =>
                    <Language key={language.iso639_1} language={language}/>
                    )}
            </ul>
        </div>
    )
}

export default Languages