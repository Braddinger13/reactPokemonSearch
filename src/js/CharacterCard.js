import React from "react";
import "../style/pokeCard.css";
import PokeStats from "./PokeStats";

const CharacterCard = ({ item }) => {
  var pokeImgStr = "pokemon/" + item.id + ".png";
  var pokeName = item.name || " ";
  var typeList = item.types || [];

  console.log(item);
  return (
    <div className="pokeCard">
      <div className="picName">
        <h3>
          {pokeName[0].toUpperCase() + pokeName.slice(1)} (#{item.id})
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
