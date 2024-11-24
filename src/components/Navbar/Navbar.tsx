import Link from 'next/link'
import { images } from '@/images'
import Image from 'next/image'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <Image src={images.movie} width={60} height={60} alt="movie icon" />
        <Link href="/" className="link">
          Series Blog
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
