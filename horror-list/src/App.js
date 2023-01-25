import React, { Component } from 'react'
import Character from './Character';
import Search from './Search';
import axios from 'axios'; 

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    searchValue: '',
    characters: [], //array
    filteredCharacters: [],
    faves: []
  }
}

componentDidMount(){
  
 this.apiCall();
}

handleSearchChange = (e) => {
  const textValue = e.target.value;
 /*  this.apiCall() */
  console.log(textValue)

  const filteredCharacterList = this.state.characters.filter(function(person) {
    return person.name.toLowerCase().includes(textValue.toLowerCase())
  })

  //allow user to input text
  this.setState({
    searchValue: textValue,
    filteredCharacters: filteredCharacterList 
    
  })
}

addToFavorite = (character) => {
  this.setState({
    faves: [...this.state.faves, character]
  })
}

/* handleFave = (e) => {
  const faves = this.state.faves.slice();
  const characterIndex = faves.indexOf(e);
  if(faves.includes(e)){
    console.log('Removing character');
    faves.splice(characterIndex, 1)
  }else {
    console.log('Adding a character');
    faves.push(e)
  }

  this.setState({faves}) // not sure if this part is correct
} */


addCharacter = (e) => {
  e.preventDefault();
  this.setState({
    characters: [...this.state.characters, this.state.searchValue],
    searchValue: ''
  })
}

clearList = (e) => {
  console.log('clearing list...')
  this.setState({
    filteredCharacters: []
  })
}

  apiCall() {
    const url = 'https://rickandmortyapi.com/api/character'
    

    axios.get(url)
    .then(response => {
      return response.data.results
    }).then(results => {
      console.log('this is results', results)
      this.setState({
        characters: results,
        filteredCharacters: results
      })
    })
  }

 render(){
const characterArray = this.state.filteredCharacters.map((item, index) => {
  return <Character name={item.name}
                    status={item.status} 
                    species={item.species} 
                    origin={item.origin.name}
                    location={item.location.name}
                    image={item.image}
                    addToFavorite={this.addToFavorite}
                    key={index} />
})

  return (
    <div>
      <h1 className="title">Rick and Morty Character List</h1>
      <form>
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange}/>
        {/* <Character fave={this.handleFave}/>  */}
        <button onClick={this.addCharacter}>Add Character</button>   
              
      </form>
      <button onClick={this.clearList}>Clear List</button>
      {characterArray}
     
    </div>
  )
 }
}

export default App;
