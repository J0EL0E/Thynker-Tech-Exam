import React from 'react'
import { useState } from 'react'

const SearchForm = ({value, func}) => {

    const fetchUrl = async (url) => {
        try {
          const response = await fetch(url, {
            method: 'GET',
          });
          if (response.ok) {
            console.log('Fetched successfully!');
          } else {
            console.error('Error: Unable to fetch the URL.');
          }
        } catch (error) {
          console.error('Fetch failed:', error.message);
        }
      };

  return (
    <div className='search-form' >
        <input type='text' name='search-key' className="search-bar" value={value} onChange={func} placeholder='Search for the website you want to visit'/> 
        <button type='submit' className='search-btn' onClick={fetchUrl}>
            <span className="material-symbols-outlined">
                search
            </span>         
        </button>
    </div>
  )
}

export default SearchForm
