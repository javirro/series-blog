import { URLS } from '@/dataFetching/urls'
import { PokemonList } from '@/types/types'
import PokemonItem, { PokemonItemSkeleton } from './PokemonItem'
import { Suspense } from 'react'

import './pokemonList.css'


const PokemonsList = async () => {
  const pokemons = await fetch(URLS['pokemon'])
  const data: PokemonList = await pokemons.json()
  return (
    <div className="pokemon-list">
      {data.results.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<PokemonItemSkeleton pokemonName={pokemon.name} />}>
          <PokemonItem key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </div>
  )
}

export default PokemonsList
