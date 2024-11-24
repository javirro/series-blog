import PokemonIndividual from '@/components/Pokemon/PokemonIndividual/PokemonIndividual'

import styles from './pokemon.module.css'

interface PageProps {
  params: Promise<{ pokemon: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const pokemon = (await params).pokemon
  return {
    title: `Pokemon: ${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}`,
    description: `Information about ${pokemon}`,
    keywords: ['pokemon', pokemon],
  }
}

const PokemonIndividualPage = async ({ params }: PageProps) => {
  const pokemon = (await params).pokemon
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pokemon}</h1>
      <PokemonIndividual pokemonName={pokemon} />
    </div>
  )
}

export default PokemonIndividualPage
