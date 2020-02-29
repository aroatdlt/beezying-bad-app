import React, { Component } from 'react';
import './App.scss';
import { serviceInfo } from './services/infoCharacters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCharacter: []
    }
  }

  componentDidMount() {
    serviceInfo()
    .then(data => { 
      const infoCharacter = data.map((character) => character)
      this.setState({
        infoCharacter: infoCharacter
      })
    })
  }

  render() {
    const { infoCharacter } = this.state
    return(
      <div className='App'>
        <header className='App-header'>
          <h1 className='title'>Who is ... in Breaking Bad?</h1>
        </header>
        <main>
          <ul className='character_list'>
            {infoCharacter.map((character) => {
              return <li key={character.char_id} className='character_info'>
              <h2 className='character_name'>{character.name}</h2>
              <img className='character_photo' src={character.img} alt={character.name}/>
              <ul className='character_details'>
                <li className='occupation'>Ocuppation: {character.occupation}</li>
                <li className='status'>Status: {character.status}</li>
                <li className='nickname'>Nickname: {character.nickname}</li>
                <li className='portrayed'>Portrayed: {character.portrayed}</li>
                <p className='titleSeasons'>Seasons</p>
                <ul>
                  {character.appearance.map((seasons, key) => {
                    return <li className='season' key={key}>{seasons}</li>
                  })}
                </ul>
              </ul>
            </li>
            })}
          </ul>
        </main>
      </div>
    )
  }
}

export default App;
