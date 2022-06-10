import React from "react";
import "../style/pokeCard.css";
import PokeStats from "./PokeStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import PokeInfo from "./PokeInfo";

const CharacterCard = ({ item, getUrl }) => {
  var pokeImgStr = "pokemon/" + item.id + ".png";
  var pokeName = item.name || " ";

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
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowLeft}
            onClick={backClick}
          />
          <span id="pokeName">
            {pokeName[0].toUpperCase() + pokeName.slice(1)} (#{item.id})
          </span>
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowRight}
            onClick={forwardClick}
          />
        </h3>
        <img id="searchRes" width={200} src={pokeImgStr} alt="" />
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div className="underPic">
          <div className="pokemonStats">
            <PokeStats item={item} />
          </div>
          <div className="pokemonInfo">
            <PokeInfo item={item} />
          </div>
        </div>
      </Box>
      <br />
    </div>
  );
};

export default CharacterCard;
