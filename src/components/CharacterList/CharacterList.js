import React, { Component } from 'react';
import './characterlist.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
  render() {
    const { sortByName, filterByName, filteredResults } = this.props;
    const filterCharacter = filteredResults();
    return (
      <React.Fragment>
        <form>
          <select onChange={sortByName}>
            <option value='no_order'>No order</option>
            <option value='title'>By Title</option>
          </select>
          <label htmlFor='searchedName'>Search your favorite character</label>
          <input type='text' id='searchedName' name='searchedName' onChange={filterByName}/>
          <label htmlFor="seasonOne"> Season 1 </label>
          <input type="checkbox" id="season_one" name="seasonOne" value="seasonOne"/>
          <label htmlFor="seasonTwo"> Season 2 </label>
          <input type="checkbox" id="season_two" name="seasonTwo" value="seasonTwo"/>
          <label htmlFor="seasonThree"> Season 3 </label>
          <input type="checkbox" id="season_three" name="seasonThree" value="seasonThree"/>
          <label htmlFor="seasonFour"> Season 4 </label>
          <input type="checkbox" id="season_four" name="seasonFour" value="seasonFour"/>
          <label htmlFor="seasonFive"> Season 5 </label>
          <input type="checkbox" id="season_five" name="seasonFive" value="seasonFive"/>
        </form>
        <ul className='character_list'>
          {filterCharacter.map(character => {
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
