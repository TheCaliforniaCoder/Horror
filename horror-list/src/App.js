import React, { Component } from 'react'
import Character from './Character';
import Search from './Search';
import axios from 'axios'; 

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    searchValue: '',
    character: [] //array
  }
}

componentDidMount(){
  
 this.apiCall();
}

handleSearchChange = (e) =>{
  const textValue = e.target.value;
//allow user to input text
  this.setState({
    searchValue: textValue
  })
  this.apiCall()
  console.log(textValue)
}


addFood = (e) => {
  e.preventDefault();
  this.setState({
    character: [this.state.character],
    searchValue: ''
  })
}

clearList = (e) => {
  console.log('clearing list')
  this.setState({
    character: []
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
        character: results
      })
    })
  }

 render(){
const characterArray = this.state.character.map(function (item, index) {
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
      </form>
      {characterArray}
     
    </div>
  )
 }
}

export default App;
