import React, { Component } from 'react';


class NewCharacter extends Component {
    onClick = (e) => {
        console.log('button clicked')
        const newCharacter = {
            name: 'de',
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
             <label >Add new character name here:</label>
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