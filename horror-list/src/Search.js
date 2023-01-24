import React, { Component } from 'react';

const Search = function(props){
return (
    <div>
        <label>Search Food Here:</label>
        <input type='text' 
         placeholder="Add a new food item..."
         value={props.value}
         onChange={props.onChange}/>
    </div>
)

}

export default Search;