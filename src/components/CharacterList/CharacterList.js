import React, { Component } from "react";
import "./characterlist.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import Loader from '../Loader/Loader';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CharacterList extends Component {
  render() {
    const {
      sortByName,
      filterByName,
      filteredResults,
      filterByStatus,
      loading
    } = this.props;
    const filterCharacter = filteredResults();
    return (
      <React.Fragment>
        <form>
          <select onChange={sortByName}>
            <option value="no_order">No order</option>
            <option value="title">By Title</option>
          </select>
          <label htmlFor="searchedName">Search your favorite character</label>
          <input
            type="text"
            id="searchedName"
            name="searchedName"
            onChange={filterByName}
          />
          <label htmlFor="alive"> Alive </label>
          <input
            type="checkbox"
            id="alive"
            name="alive"
            value="alive"
            onClick={filterByStatus}
          />
          <label htmlFor="deceased"> Deceased </label>
          <input
            type="checkbox"
            id="deceased"
            name="deceased"
            value="deceased"
            onClick={filterByStatus}
          />
        </form>
        {loading ? (
          <Loader />
        ) : (
          <ul className="character_list">
            {filterCharacter.map(character => {
              return (
                <Link
                  key={character.char_id}
                  to={`/${character.char_id}`}
                  className="character_link"
                >
                  <li key={character.char_id} className="character_info">
                    <CharacterCard
                      name={character.name}
                      photo={character.img}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </React.Fragment>
    );
  }
}

export default CharacterList;
