import React, { Component } from 'react'
import Character from './Character';
import Search from './Search';
import NewCharacter from './NewCharacter';
import axios from 'axios'; 
import './App.css'

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    searchValue: '',
    characters: [], //array
    filteredCharacters: [],
    faves: [],
    newCharacterValue: ''
  }
}

componentDidMount(){
 this.apiCall();
}

//takes input and matches it to api characters
handleSearchChange = (e) => {
  const textValue = e.target.value;
  const filteredCharacterList = this.state.characters.filter(function(person){
    return person.name.toLowerCase().includes(textValue.toLowerCase())
  })
//allow user to input text
  this.setState({
    searchValue: textValue,
    filteredCharacters: filteredCharacterList 
  })
}

addCharacter = (newPerson) => {
 this.setState({
   characters: [...this.state.characters, newPerson],
   filteredCharacters: [...this.state.characters, newPerson]
 })
}

//adds user's faves to faves state
addToFavorite = (character) => {
  this.setState({
    faves: [...this.state.faves, character]
  })
}

changeName = (item, index) => {
  let changedName = prompt('What do you wish to rename this character?');
  const newArray = [...this.state.characters]
  const itemIndex = newArray.indexOf(item)
  newArray[itemIndex] = {
    ...item, name: changedName
  }
  this.setState({
    characters: newArray,
    filteredCharacters: newArray
  })
}

clearFavorites = (character) => {
  this.setState({
    faves: []
  })
}


//deletes character and resets the state
deleteCharacter = (character) => {
let characters = this.state.characters.slice()
characters = characters.filter(person => {
  return person.name !== character.name
})
let filteredCharacters = this.state.filteredCharacters.slice()
filteredCharacters = filteredCharacters.filter(person => {
  return person.name !== character.name
})
  this.setState({
    characters: characters,
    filteredCharacters: filteredCharacters
  })
}


clearList = (e) => {
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
                    deleteCharacter={this.deleteCharacter}
                    addToFavorite={this.addToFavorite}
                    changeName={() => {this.changeName(item, index)}}
                    key={index} />
})
const faveCharacterArray = this.state.faves.map((item, index) => {
  return <Character name={item.name}
                    status={item.status} 
                    species={item.species} 
                    origin={item.origin}
                    location={item.location}
                    image={item.image}
                    deleteCharacter={this.deleteCharacter}
                    addToFavorite={this.addToFavorite}
                    key={index} />
})

  return (
    <div>
      <h1 className="title">Rick and Morty Character List</h1>
      <form>
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange}/>
        <NewCharacter addCharacter={this.addCharacter}/>       
      </form>
       <button onClick={this.clearList}>Clear List</button> 
       <button onClick={this.clearFavorites}>Clear Favorites</button>
       <h2 className="headers">Faves</h2>
       {faveCharacterArray}
       <hr></hr>
       <h2 className="headers">All Characters</h2>
      {characterArray}
    </div>
  )
 }
}

export default App;
