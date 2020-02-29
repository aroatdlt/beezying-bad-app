import React, { Component } from "react";
import PropTypes from "prop-types";
import "./charactercard.scss";

class CharacterCard extends Component {
  render() {
    const { name, photo } = this.props;
    return (
      <div className="card">
        <h2 className="character_name">{name}</h2>
        <img className="character_photo" src={photo} alt={name} />
      </div>
    );
  }
}

export default CharacterCard;
