import React, { Component } from 'react';
import './characterlist.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
  render() {
    const { infoCharacter, sortByName } = this.props;
    return (
      <React.Fragment>
        <form>
          <select onChange={sortByName}>
            <option value='no_order'>No order</option>
            <option value='title'>By Title</option>
          </select>
        </form>
        <ul className='character_list'>
          {infoCharacter.map(character => {
            return (
              <Link
                key={character.char_id}
                to={`/${character.char_id}`}
                className='character_link'
              >
                <li key={character.char_id} className='character_info'>
                  <CharacterCard name={character.name} photo={character.img} />
                </li>
              </Link>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default CharacterList;
