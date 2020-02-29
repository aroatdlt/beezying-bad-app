import React, { Component } from 'react';
import './App.scss';
import { serviceInfo } from './services/infoCharacters';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCharacterRaw: [],
      infoCharacter: []
    }
    this.sortByName = this.sortByName.bind(this);
  }

  componentDidMount() {
    serviceInfo()
    .then(data => { 
      const infoCharacter = data.map((character) => character);
      this.setState({
        infoCharacterRaw: infoCharacter,
        infoCharacter: [...infoCharacter]
      })
    })
  }

  getCharacter(id) {
    const { infoCharacter } = this.state;
    return infoCharacter.find(character => character.char_id === parseInt(id));
  }

  sortByName(event){
    const byTitleOption = event.currentTarget.value;
    if(byTitleOption === 'title'){
      const sortByNameData = this.state.infoCharacter.sort((a, b) => (a.name > b.name)? 1 : ((a.name < b.name) ? -1 : 0));
      this.setState({
        infoCharacter: sortByNameData
      })
    } else {
      this.setState({
        infoCharacter: [...this.state.infoCharacterRaw]
      })
    }
  }

  render() {
    return(
      <div className='App'>
        <header className='App-header'>
          <h1 className='title'>Who is ... in Breaking Bad?</h1>
        </header>
        <main className='main'>
          <Switch>
            <Route exact
              path='/'
              render={props =>
                <CharacterList
                  infoCharacter={this.state.infoCharacter}
                  sortByName={this.sortByName}
                />
              }
            />
            <Route exact
              path='/:id'
              render={props =>
                <CharacterDetail
                  {...props}
                  characterInfo={this.getCharacter(props.match.params.id)}
                />
              }
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
