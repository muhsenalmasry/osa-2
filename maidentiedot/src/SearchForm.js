import React from 'react'

const SearchForm = (props) => {
    <div>
    <form onSubmit={props.filter}>
        find countries <input />
    </form>
    </div>
}

export default SearchForm