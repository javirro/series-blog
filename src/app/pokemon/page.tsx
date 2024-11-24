import PokemonsList from '@/components/Pokemon/PokemonList'
import styles from '../app.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'A list of all the Pokemon from the first generation.',
  keywords: ['pokemon', 'pokedex', 'generation 1'],
}

interface PageProps {
  searchParams: Promise<{ page: string }>
}

const Page = async ({ searchParams }: PageProps) => {
  const searchP = await searchParams
  const page = parseInt(searchP.page) || 1
  return (
    <section className={styles.page}>
      <h1>Pokedex</h1>
      <div className={styles.grid}>
        <PokemonsList page={page} />
      </div>
      <section className={styles.pagination}>
        <Link href={`/pokemon?page=${page - 1}`} className={styles.btn}>Previous</Link>
        <span>Page {page}</span>
        <Link href={`/pokemon?page=${page + 1}`} className={styles.btn}>Next</Link>
      </section>
    </section>
  )
}

export default Page
