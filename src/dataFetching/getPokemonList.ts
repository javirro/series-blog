import { PokemonList } from '@/types/types'
import { URLS } from './urls'

export const getPokemonList = async (offset: number, limit: number = 20) => {
  const pokemonListUrl = `${URLS['pokemon']}?limit=${limit}&offset=${offset}`
  const pokemons = await fetch(pokemonListUrl)
  const data: PokemonList = await pokemons.json()
  return data
}
