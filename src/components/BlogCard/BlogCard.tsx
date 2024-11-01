import { Series } from '@/types/types'
import styles from './blogcard.module.css'
import { images } from '@/images'
import Image from 'next/image'
import { descriptions } from '@/data/descriptions'
import Link from 'next/link'

const BlogCard = ({ serie }: { serie: Series }) => {
  const img = images[serie]
  const description = descriptions[serie]
  return (
    <Link className={styles.card} href={`/${serie}`}>
      <Image src={img} alt={serie} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.title}>{serie}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}

export default BlogCard
