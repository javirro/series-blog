import PokemonsList from '@/components/Pokemon/PokemonList'
import styles from '../app.module.css'
import { Suspense } from 'react'

const PokemonPage = () => {
  return (
    <section className={styles.page}>
      <h1>Pokemon</h1>
      <div className={styles.grid}>
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonsList />
        </Suspense>
      </div>
    </section>
  )
}

export default PokemonPage
