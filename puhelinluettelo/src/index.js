import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [{ name: 'Arto Hellas', number: '040-123456' },
{ name: 'Ada Lovelace', number: '39-44-5323523' },
{ name: 'Dan Abramov', number: '12-43-234345' },
{ name: 'Mary Poppendieck', number: '39-23-6423122' }
]

ReactDOM.render(<App persons={persons}/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

