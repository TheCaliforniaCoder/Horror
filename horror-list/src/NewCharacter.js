import React, { Component } from 'react';

//need to add the newCharacter text value to name key in newCharacter object
//then need unshift newCharacter to characters array

class NewCharacter extends Component {
    onClick = (e) => {
        e.preventDefault()
        console.log('button clicked')
        const newCharacter = {
            name: '',
            status: 'alive...hopefully',
            species: 'human',
            origin: 'earth',
            location: 'here'
        }
        this.props.addCharacter(newCharacter)
     }   
   render () {
    return (
        <div>
             <label>Add new character name here:</label>
            <input type='text' 
             placeholder="Add new character name here"
             value={this.props.value}
             />
             <button onClick={this.onClick}>Add character</button>
        </div>
    )

   }
}

export default NewCharacter;