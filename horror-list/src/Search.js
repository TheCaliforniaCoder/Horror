const Search = function(props){
    
return (
    <div>
        <label >Search Character Name Here:</label>
        <input type='text' 
         placeholder="Search a Rick and Morty Character"
         value={props.value}
         onChange={props.onChange}/>
    </div>
)

}

export default Search;