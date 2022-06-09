import { useState, useEffect, React } from "react";
import { Autocomplete, TextField, Grid } from "@mui/material";
import axios from "axios";

const PokeSearch = ({ getUrl }) => {
  const [searchName, setSearchName] = useState("");
  const [pokeNames, setPokeNames] = useState([]);

  const onClick = (e) => {
    if (searchName.length > 0) {
      getUrl(`https://pokeapi.co/api/v2/pokemon/` + searchName.toLowerCase());
    }
  };

  useEffect(() => {
    const fetchPokeNames = async () => {
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`
        );
        setPokeNames(result.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokeNames();
  }, []);

  const newNames = pokeNames.map(getName);

  function getName(item) {
    return item.name[0].toUpperCase() + item.name.slice(1);
  }

  return (
    <div>
      <span className="autoSearchBox">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Autocomplete
            id="combo-box-demo"
            options={newNames}
            sx={{
              width: 250,
              marginBottom: 1
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Pokemon" />
            )}
            onInputChange={(event, newInputValue) => {
              setSearchName(newInputValue);
            }}
          />
        </Grid>
      </span>
      <span> </span>
      <button className="searchBtn" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default PokeSearch;
