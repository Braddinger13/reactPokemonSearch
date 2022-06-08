import './style/App.css';
import { useState, useEffect, React } from "react";
import Header from './js/Header';
import PokeSearch from './js/PokeSearch';
import axios from 'axios';
import CharacterCard from './js/CharacterCard';

function App() {

  const [item, setItem] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/pikachu')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(url)
        setItem(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems(url)
  }, [url])


  return (
    <div className="App">
      <Header />
      <div className='searchBox'>
        <PokeSearch getUrl={(u) => setUrl(u)} />
        <CharacterCard item={item} getUrl={(u) => setUrl(u)}/>
      </div>
    </div>
  );
}

export default App;