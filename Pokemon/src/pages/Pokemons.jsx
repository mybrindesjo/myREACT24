import React, { useEffect, useState } from 'react';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // LOGIK DU VILL UTFÖRA
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
  
        const data = await response.json()
        setPokemons(data.results);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false)
      }
    };

    fetchData();

  }, []) // DEPENDENCY ARRAY = KÖR SIDOEFFEKTEN BEROENDE PÅ VAD SOM FINNS I ARRAYEN

  if (error) {
    return <p>{error}</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }
  
  
  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
<<<<<<< HEAD
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
=======
        <div key={pokemon.name} className="pokemon-card">
          <p>{pokemon.name}</p>
          <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`} alt={pokemon.name} />
>>>>>>> 04e3294640f0568ac9ebfdd4ef7c9cf247a834db
        </div>
      ))}
    </div>
  )
}

export default Pokemons