import PokemonsList from '@/components/Pokemon/PokemonList'
import styles from '../app.module.css'
import Link from 'next/link'

const Page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = (await parseInt(searchParams.page)) || 1
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



