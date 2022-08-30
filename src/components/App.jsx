import React, { useEffect, useState } from "react";
import Loader from "@components/Loader.jsx";
import Logo from "@assets/logo.svg";

function App() {
  const [pokemon, setPokemon] = useState({
    nombre: "",
    url: "",
  });

  useEffect(() => {
    getPokemons();
  }, []);

  const numAlt = () => {
    return Math.floor(Math.random() * (120 - 1 + 1) + 1);
  };

  const getPokemons = async () => {
    const id = numAlt();
    const response = await fetch(`${process.env.API}${id}`);
    const data = await response.json();
    setPokemon({
      nombre: data.name,
      url: data.sprites.other.dream_world.front_default,
    });
  };

  return (
    <div className="searchPokemon">
      <div className="viewPokemon">
        <img className="logo" src={Logo} alt="Logo" />
        {(pokemon.url && (
          <>
            <img src={pokemon.url} alt={pokemon.nombre} />{" "}
            <h1>{pokemon.nombre}</h1>
          </>
        )) || <Loader />}
      </div>
    </div>
  );
}

export default App;
