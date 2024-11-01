import { Series } from '@/types'
import styles from './blogcard.module.css'
import { images } from '@/images'
import Image from 'next/image'
import { descriptions } from '@/app/data/descriptions'

const BlogCard = ({ serie }: { serie: Series }) => {
  const img = images[serie]
  const description = descriptions[serie]
  return (
    <article className={styles.card}>
      <Image src={img} alt={serie} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.title}>{serie}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

export default BlogCard
