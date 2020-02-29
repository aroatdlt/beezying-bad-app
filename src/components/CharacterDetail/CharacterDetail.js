import React, { Component } from "react";
import "./characterdetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterDetail extends Component {
  render() {
    const {
      name,
      img,
      occupation,
      status,
      nickname,
      portrayed,
      appearance
    } = this.props.characterInfo;
    return (
      <React.Fragment>
        <div className="character__info--card">
          <p className="character_name">{name}</p>
          <img className="character_photo" src={img} alt={name} />
          <ul className="character_details">
            <li className="occupation">Occupation: {occupation}</li>
            <li className="status">Status: {status}</li>
            <li className="nickname">Nickname: {nickname}</li>
            <li className="portrayed">Portrayed: {portrayed}</li>
            <p className="titleSeasons">Seasons</p>
            <ul>
              {appearance.map((seasons, key) => {
                return (
                  <li className="season" key={key}>
                    {seasons}
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CharacterDetail;
