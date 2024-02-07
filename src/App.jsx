import "./App.css";
import { useState, useEffect } from "react";
import { fetchPokemonList } from "./api";

function App() {
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [pokeList, setPokeList] = useState(null);

  useEffect(() => {
    async function getPokemonList() {
      const APIData = await fetchPokemonList();
      setNext(APIData.next);
      setPrev(APIData.previous);
      setPokeList(APIData.results);
    }
    getPokemonList();
  }, []);

  console.log({ next, prev, pokeList });

  return (
    <div className="App">
      <h1>Poke-Dex!</h1>
    </div>
  );
}

export default App;
