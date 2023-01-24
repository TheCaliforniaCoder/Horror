import React, { Component } from 'react'
import Food from './Food';
import axios from 'axios'; 

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    food: [],
    searchValue: '', 
    newFood:  ''
  }
}

componentDidMount(){
  
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: {prefix: 'chicken soup'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

handleSearchChange = (e) =>{
  const textValue = e.target.value;
//allow user to input text
  
}


addFood = (e) => {
  e.preventDefault();

  this.setState({
    food: [this.state.food, this.state.newFood],
    searchValue: ''
  })
}

clearList = (e) => {
  console.log('clearing list')
  this.setState({
    food: []
  })
}

 render(){
  return (
    <div>
      <h1>Food List</h1>
      <ul>
        <Food />
      </ul>
      <form>
        <input type='text'
        placeholder="Add a new food item..."
        />

        <button onClick={this.addFood}>Add Food</button>
        <button onClick={this.clearList}>Clear List</button>
      </form>
    </div>
  )
 }
}

export default App;
