handleToggleFavourite = (character) => {
    // spread operator ... to make a shallow copy saved in variable
    const newFavouriteCharacters = [...this.state.favouriteCharacters]
    // saving index of character
    const characterIndex = newFavouriteCharacters.indexOf(character)
    // if the characterID is not in the array (-1) then push it to the new array (newfavcharac)
    if (characterIndex === -1){
          newFavouriteCharacters.push(character)
    } else {
      //else (cause it is in the array) then take it out and show only favs array
      newFavouriteCharacters.splice(characterIndex, 1)
      this.setState({
        charactersToShow: newFavouriteCharacters
      })
    }
    // set favcharac state this this local variable
    this.setState({
      favouriteCharacters: newFavouriteCharacters
    })
  }