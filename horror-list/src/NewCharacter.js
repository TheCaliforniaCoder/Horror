import React, { Component } from 'react';

class NewCharacter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

//add state to clear search value
onClick = (e) => {
    e.preventDefault()
    const newPerson = {
        name: this.state.searchValue,
        status: 'alive...hopefully',
        species: 'human',
        origin: 'earth',
        location: 'here'
        }
        this.props.addCharacter(newPerson)
        this.setState({
            searchValue: ''
        })
     } 

onChange = (e) => {
    const newValue = e.target.value;
        this.setState ({
            searchValue: newValue
        })
    } 

render() {
    return (
        <div>
            <label>Add new character name here:</label>
             <input type='text' 
                    placeholder="Add new character name here"
                    value={this.state.searchValue}
                    onChange={this.onChange}/>
            <button onClick={this.onClick}>Add character</button>
        </div>
    )
   }
}

export default NewCharacter;