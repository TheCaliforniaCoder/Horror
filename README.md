# Project: Rick and Morty API List

## Description

This is my first project using React as part of the SEI General Assembly Course. The task was to create a web application using ReactJS and an API of your choice that met the requirements of a provided specification. I chose to display a list of characters from the Rick and Morty API and implement full CRUD actions so that the user can Create, Read, Update and Delete characters from the list. I also included a search function so that users can find characters quickly. 
   
   * Preview Image:
   
   ![Imgur](https://i.imgur.com/aJohyo8.png)
   
## Deployment Link:
* [View Character List Here](https://dejasrickandmortyapilist.netlify.app/)
   
## Technical Requirements

   * Add a new item to a list.
   * Mark the item as complete/favorite/(watch, read, listen) later/flag/etc.
   * Edit an item from a list.
   * Remove an item from a list.
   * Clear/delete all items.
   * Clear/delete only marked items.
   * Fetch data from at least one 3rd party API using Axios or fetch.

### Bonus Features

   * Allow user to search for characters within list.

## Timeframe & Team
   
   We were given a week to complete this solo assignment. 
   
## Technologies Used

  * **Code Editor:** VSCode
  * **Programming Languages:** HTML, CSS, JavaScript, JSX
  * **JS-Libaries:** React, Axios
  * **Version Control:** Git & Git Hub Source Control
   
## Planning 

   * I started by looking for an appropriate API.
   * I created a To-Do list to keep track of tasks.
   * I created a basic template of the list in React and then started building my components.

## Build/Code Process

With one week for development, I focused on delivering the core technical requirements while ensuring the page and code could scale to the optional extras. After choosing the Rick and Morty API and forming the necessary components, I began with making the API call.
   
   * My first API call:
   
   ```javascript
   
apiCall() {
  const url = 'https://rickandmortyapi.com/api/character'
  axios.get(url)
    .then(response => {
      return response.data.results
    })
    .then(results => {
      this.setState({
        characters: results,
        filteredCharacters: results
      })
    })
}
   ```
   
   This was my first time using axios to make an API call. Excited to do many more!
   
After obtaining the comprehensive list of characters from the Rick and Morty API, my attention shifted towards user actions. Specifically, I aimed to enable users to add, delete, or modify existing characters, as well as manage their favorites by adding or removing characters. To achieve this, I developed three components external to the App component. The first is the 'Search' component, allowing users to input the name of the desired character. The second component is the 'NewCharacter' component, enabling users to create a new character by inputting its name. Lastly, the 'Character' component serves as the primary interface for users to execute the aforementioned actions, such as editing, deleting, or adding characters to their favorites.
   
   * Character Component:
   
   ```javascript

class Character extends Component{
onClick = (e) => {
    const character = {
        name: this.props.name,
        status: this.props.status,
        species: this.props.species,
        origin: this.props.origin,
        location: this.props.location,
        image: this.props.image
    }
   this.props.addToFavorite(character)
}   

delete = (e) => {
    const character = {
        name: this.props.name,
        status: this.props.status,
        species: this.props.species,
        origin: this.props.origin,
        location: this.props.location
    }
    this.props.deleteCharacter(character)
}


      render(){
          return (
              <div className='container'>
                  <div id='char' className='text'>
                      <h2>Name: {this.props.name}</h2>
                      <h3>Status: {this.props.status}</h3>
                      <h3>Species: {this.props.species}</h3>
                      <h3>Origin: {this.props.origin}</h3>
                      <h3>Location: {this.props.location}</h3>

                      <img className="images" alt="characters" src={this.props.image}/>
                  </div>
                  <div>
                      <button className='buttons' onClick={this.onClick}>Add to Favorites</button> 
                      <button className='buttons' onClick={this.delete}>Remove Character</button>
                      <button className='buttons' onClick={this.props.changeName}>Edit Name</button>
                  </div>

              </div>
          )
      }
}

export default Character;
   ```
   
   The App Component hosted several functions called in the Components mentioned above. 

One function I particularly enjoyed building was the ‘deleteCharacter’ function where I created a copy of the ‘characters’ array stored in the component's state using the slice() method. 

Then, I filtered this copied array to remove the ‘character’ object passed as a parameter by checking if the ‘name’ property of each object in the array is not equal to the ‘name’ property of the passed ‘character’ object.

I then created another copy of the ‘filteredCharacters’ array stored in the component's state using the slice() method while filtering this copied array to remove the ‘character’ object passed as a parameter using the same approach.

Lastly, I called the ‘setState’ method to update the state of the component with the new ‘characters’ and ‘filteredCharacters’ arrays that no longer included the removed ‘character’ object.

   * deleteCharacter Function:
    
 ```javascript   
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

 ```
    
In the following code block, I defined a function called ‘handleSearchChange’ that takes an event object ‘e’ as a parameter. When this function is triggered, I first extracted the value of the input field that triggered the event using ‘e.target.value’ and assigned it to a constant called ‘textValue’.

After that, I created a new array called ‘filteredCharacterList’ by filtering the ‘characters’ array stored in my component's state. I used the filter function to check if the ‘name’ property of each object in the ‘characters’ array contains the ‘textValue’ string entered by the user, regardless of the case. If it does, the object is included in the new ‘filteredCharacterList’ array.

I then updated the state of my component using the ‘setState’ method. I set the ‘searchValue’ property of the state to the ‘textValue’ entered by the user and the ‘filteredCharacters’ property of the state to the ‘filteredCharacterList’ array created in the previous step.
   
   * handleSearchChange Function:

 ```javascript
   
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
 ```
   
   This was a bonus feature that made the page more user friendly.
   
## Challenges

Selecting an appropriate API proved to be the biggest obstacle, as it took me two days of the seven-day project to scour for the ideal one. This task educated me on how to thoroughly comprehend API documentation. Additionally, I initially struggled to comprehend the organization of the various components but eventually improved my understanding. Overall, I encountered difficulties determining where to commence, but I tackled the task methodically.
     
## Wins
   
Besides finishing on time, I'd say the biggest win is learning how to create a React app using a third-party API. I even surprised myself by tackling one of the additional features: the search function.
      
## Key Learnings & Takeaways
  
   * Using my time more effecienty: spend less time on insignificant factors.
   * KISS: keep it simple stupid. Don't bite off more than I can chew.
   * In general I feel as though this was the practice I needed in React.

## Future Improvements

In the future, my plan is to revamp the page's layout and alter its structure. I'd also like to make the page responsive. Additionally, I intend to add audio effects and enable users to upload images for the characters they add.

