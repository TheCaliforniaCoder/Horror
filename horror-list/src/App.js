import React, { Component } from 'react'
import Character from './Character';
import Search from './Search';
import axios from 'axios'; 

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    searchValue: '',
    characters: [] //array
  }
}

componentDidMount(){
  
 this.apiCall();
}

handleSearchChange = (e) => {
  const textValue = e.target.value;
  this.apiCall()
  console.log(textValue)

  const filteredCharacterList = this.state.characters.filter(function(person) {
    return person
  })

  //allow user to input text
  this.setState({
    searchValue: textValue,
    characters: filteredCharacterList 
    
  })


}


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
    characters: []
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
        characters: results
      })
    })
  }

 render(){
const characterArray = this.state.characters.map(function (item, index) {
  return <Character name={item.name}
                    status={item.status} 
                    species={item.species} 
                    origin={item.origin.name}
                    location={item.location.name}
                    image={item.image}
                    key={index} />
})

  return (
    <div>
      <h1>Character List</h1>
      <form>
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange}/>
        <button onClick={this.addCharacter}>Add Character</button>         
      </form>
      {characterArray}
     
    </div>
  )
 }
}

export default App;
