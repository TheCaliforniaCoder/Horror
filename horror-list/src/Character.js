import React, { Component } from 'react';


class Character extends Component{
onClick = (e) => {
    console.log('button clicked')
    const character = {
        name: this.props.name,
        status: this.props.status,
        species: this.props.species,
        origin: this.props.origin,
        location: this.props.location
    }
   this.props.addToFavorite(character)
}   

trigger = (e) => {
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
        <div className="text" >
            <h2>Name: {this.props.name}</h2>
            <h3>Status: {this.props.status}</h3>
            <h3>Species: {this.props.species}</h3>
            <h3>Origin: {this.props.origin}</h3>
            <h3>Location: {this.props.location}</h3>

            <img className="images" alt="characters" src={this.props.image}/>

            <button onClick={this.onClick}>Add to Favorites</button> 
            <button trigger={this.trigger}>Remove Character</button>
            
        </div>
    )
}
}

export default Character;