import { PokemonResponse } from '@/types/pokemonApiTypes'
import { URLS } from './urls'

export const getPokemon = async (pokemon: string) => {
  const pokemonUrl = `${URLS['pokemon']}${pokemon}`
  const pokemonData = await fetch(pokemonUrl, {
    cache: 'force-cache',
  })
  const data: PokemonResponse = await pokemonData.json()
  return data
}
