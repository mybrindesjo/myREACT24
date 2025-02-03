import React from 'react';
import useSWR from 'swr'; 
import PokemonCard from '../components/PokemonCard';

const fetcher = (url) => fetch(url).then((res) => res.json())

const PokemonsSwr = () => {
    const { data, error, isLoading } = useSWR('https://pokeapi.co/api/v2/pokemon', fetcher) // Fixed typo: isLoding to isLoading
    
    if (error) {
        return <p>{error.message}</p> // Changed to error.message for better error display
    }
    
    if (!data) {
        return <p>Loading...</p>
    }
    
    return (
        <div className="pokemons-container">
            {data.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    )
}
export default PokemonsSwr