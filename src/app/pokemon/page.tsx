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
      <h1>Pokemon List</h1>
      <div className={styles.grid}>
        <PokemonsList page={page} />
      </div>
      <section className={styles.pagination}>
        <Link href={`/pokemon?page=${page - 1}`}>Previous</Link>
        <Link href={`/pokemon?page=${page + 1}`}>Next</Link>
      </section>
    </section>
  )
}

export default Page
