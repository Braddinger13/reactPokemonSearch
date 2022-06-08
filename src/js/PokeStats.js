import React from "react";
import "../style/pokeStats.css";

const PokeStats = ({ item }) => {
  var statList = item.stats || [];

  return (
    <div>
      <div className="pokeStats">
        {statList.map((object, i) => (
          <div key={i} className={object.stat.name}>
            {object.stat.name.toUpperCase()}
            <div className="statBar">
              <div
               className="statFill"
               style={{
                width: object.base_stat + "px"
               }}
               >{object.base_stat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeStats;
