import { URLS } from '@/dataFetching/urls'
import { PokemonResponse } from '@/types/pokemonApiTypes'
import Link from 'next/link'

const PokemonItem = async ({ pokemonName }: { pokemonName: string }) => {
  const url = `${URLS['pokemon']}${pokemonName}`
  const pokemonData = await fetch(url)
  const data: PokemonResponse = await pokemonData.json()
  const image = data.sprites.front_default

  return (
    <Link href={`/pokemon/${pokemonName}`} className="pokemon-item">
      <h4>{pokemonName}</h4>
      <img src={image} alt={pokemonName} />
    </Link>
  )
}

export default PokemonItem

export const PokemonItemSkeleton = ({ pokemonName }: { pokemonName: string }) => {
  return (
    <div className="pokemon-item">
      <h4>{pokemonName}</h4>
      <div className="skeleton"></div>
    </div>
  )
}
