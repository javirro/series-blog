import { getPokemon } from '@/dataFetching/getPokemon'
import styles from './individual.module.css'

const PokemonIndividual = async ({ pokemonName }: { pokemonName: string }) => {
  const pokemon = await getPokemon(pokemonName)
  return (
    <article className={styles.pokemonBox}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </article>
  )
}

export default PokemonIndividual
