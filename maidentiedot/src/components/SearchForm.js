import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                find countries <input onChange={props.handleFieldChange}/>
            </form>
        </div>
    )
}

export default SearchForm