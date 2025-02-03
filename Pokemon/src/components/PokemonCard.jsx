import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const PokemonCard = ({ url }) => {
    const { data, error, isLoading } = useSWR(url, fetcher)

    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>Loading...</p>
    

    return (
        <div key={data.name} className="pokemon-card">
            <p>{data.name}</p>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    )
}

export default PokemonCard