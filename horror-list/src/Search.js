import './Search.css' 
const Search = function(props){
    
return (
    <div className='search'>
        <label className='prompts'>Search for a character name here:</label>
         <input className='input'
                type='text'
                placeholder="Search character"
                value={props.value}
                onChange={props.onChange}/>
    </div>
)

}

export default Search;