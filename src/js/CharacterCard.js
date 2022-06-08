import React from "react";
import "../style/pokeCard.css";
import PokeStats from "./PokeStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = ({ item, getUrl }) => {
  var pokeImgStr = "pokemon/" + item.id + ".png";
  var pokeName = item.name || " ";
  var typeList = item.types || [];

  const backClick = () => {
    if (item.id > 1) {
      const newId = item.id - 1;
      getUrl(`https://pokeapi.co/api/v2/pokemon/` + newId);
    }
  };

  const forwardClick = (e) => {
    if (item.id < 898) {
      const newId = item.id + 1;
      getUrl(`https://pokeapi.co/api/v2/pokemon/` + newId);
    }
  };

  return (
    <div className="pokeCard">
      <div className="picName">
        <h3>
          <FontAwesomeIcon className="arrow" icon={faArrowLeft} onClick={backClick} />
          <span id="pokeName">
            {pokeName[0].toUpperCase() + pokeName.slice(1)} (#{item.id})
          </span>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} onClick={forwardClick} />
        </h3>
        <img id="searchRes" width={200} src={pokeImgStr} alt="" />
      </div>
      <div className="pokeInfo">
        <PokeStats item={item} />
        <div className="infoDiv">
          <u>Pokemon's Info</u>
          <div className="pokeTypes">
            Type(s)-
            {typeList.map((object, i) => (
              <span key={i}>
                {" "}
                {object.type.name[0].toUpperCase() + object.type.name.slice(1)}
              </span>
            ))}
          </div>

          <div className="pokeHeight">Height- {item.height / 10} Meter(s)</div>

          <div className="pokeWeight">
            Weight- {item.weight / 10} Kilogram(s)
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CharacterCard;
