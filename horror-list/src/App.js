import React, { Component } from 'react'
import Character from './Character';
import Search from './Search';
import NewCharacter from './NewCharacter';
import Faves from './Faves';
import axios from 'axios'; 

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

showFavorites = (e) => {
e.preventDefault();
console.log('show faves')
return this.state.faves
}

addCharacter = (e) => {
  const textValue = e.target.value
  console.log('adding character')
  this.setState({
    characters: [...this.state.characters, textValue],
    newCharacterValue: ''
  })
}

deleteCharacter = (e) => {
console.log('delete character')
this.setState({

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

        {/* <Faves onClick={this.showFavorites}/> */}

         <NewCharacter onClick={this.addCharacter}/>  
              
      </form>
       <button onClick={this.clearList}>Clear List</button> 
      
      {characterArray}
     
    </div>
  )
 }
}

export default App;
