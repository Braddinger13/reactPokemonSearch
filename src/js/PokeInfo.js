import React from "react";

const PokeInfo = ({item}) => {
  var typeList = item.types || [];

  return (
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

      <div className="pokeWeight">Weight- {item.weight / 10} Kilogram(s)</div>
    </div>
  );
};

export default PokeInfo;
