import React, { Component } from 'react';

class Character extends Component{
render(){
    return (
        <div>
            <h2>Name: {this.props.name}</h2>
            <h3>Status: {this.props.status}</h3>
            <h3>Species: {this.props.species}</h3>
            <h3>Location: {this.props.location.name}</h3>
            <img src={this.props.image}/>
        </div>
    )
}
}

export default Character;