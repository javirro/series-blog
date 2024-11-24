import { getPokemon } from '@/dataFetching/getPokemon'
import styles from './individual.module.css'

const PokemonIndividual = async ({ pokemonName }: { pokemonName: string }) => {
  const pokemon = await getPokemon(pokemonName)
  return (
    <article className={styles.pokemonBox}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.pokeImg} />
      <div className={styles.dataBox}>
      <div className={styles.box}>
          <strong>Id</strong>
          <p>{pokemon.id}</p>
        </div>

        <div className={styles.box}>
          <strong>Order</strong>
          <p>{pokemon.order}</p>
        </div>
        <div className={styles.box}>
          <strong>Height</strong>
          <p>{pokemon.height}</p>
        </div>
        <div className={styles.box}>
          <strong>Weight</strong>
          <p>{pokemon.weight}</p>
        </div>

        <div className={styles.box}>
          <strong>Base Exp.</strong>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className={styles.box}>
          <strong>Specie</strong>
          <p>{pokemon.species.name}</p>
        </div>
        <div className={styles.box}>
          <strong>Main move</strong>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </article>
  )
}

export default PokemonIndividual
