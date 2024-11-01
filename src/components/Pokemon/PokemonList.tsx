import PokemonItem, { PokemonItemSkeleton } from './PokemonItem'
import { Suspense } from 'react'
import { getPokemonList } from '@/dataFetching/getPokemonList'
import './pokemonList.css'

const PokemonsList = async ({ page }: { page: number }) => {
  const offset = (page - 1) * 20
  const data = await getPokemonList(offset)
  console.log(data)
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
