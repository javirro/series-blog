import { getPokemon } from '@/dataFetching/getPokemon'

const PokemonIndividual = async ({ pokemonName }: { pokemonName: string }) => {
  const pokemon = await getPokemon(pokemonName)
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  )
}

export default PokemonIndividual
