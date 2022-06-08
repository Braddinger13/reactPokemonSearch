import { useState, React } from "react";
const PokeSearch = ({ getUrl }) => {
  const [searchName, setSearchName] = useState("");

  const onClick = (e) => {
    if(searchName.length > 0){
        getUrl(`https://pokeapi.co/api/v2/pokemon/` + searchName.toLowerCase());
    }
  };

  //Idea: add click arrows to scroll through pokemon

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Search Pokemon..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <span> </span>
      <button className="searchBtn" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default PokeSearch;
