
import BlogCard from '@/components/BlogCard/BlogCard'
import styles from './app.module.css'
import { Series } from '@/types'

export default function Home() {
  const series: Series[] = ["pokemon", "digimon"]
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Biggest childhood series blog</h1>
      <div className={styles.content}>
        <p className={styles.headtext}>
          Be ready to remember all the good moments of your childhood when reading this blog about the best series between 1996-2004. Choose your favorite
          series and read about the best moments, the best characters, and the best episodes.
        </p>
        <div className={styles.grid}>
          {series.map((serie) => (
            <BlogCard key={serie} serie={serie} />
          ))}
        </div>
      </div>
    </section>
  )
}
