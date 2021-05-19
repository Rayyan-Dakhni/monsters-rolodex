import React from 'react';
import './search-box.styles.css';

// this is a functional components

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)