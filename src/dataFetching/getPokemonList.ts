import { PokemonList } from '@/types/types'
import { URLS } from './urls'

export const getPokemonList = async (offset: number) => {
  const LIMIT = 20
  const pokemonListUrl = `${URLS['pokemon']}?limit=${LIMIT}&offset=${offset}`
  console.log({
    offset,
    pokemonListUrl
  })
  const pokemons = await fetch(pokemonListUrl)
  const data: PokemonList = await pokemons.json()
  return data
}
