const Search = function(props){
    
return (
    <div>
        <label>Search Character Here:</label>
        <input type='text' 
         placeholder="Add a new character..."
         value={props.value}
         onChange={props.onChange}/>
    </div>
)

}

export default Search;