'use client'

import Link from 'next/link'
import { images } from '@/images'
import Image from 'next/image'
import useTelegramUser from '@/hooks/useTelegramUser'

import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/BrowserOnlyComponent'),
  { ssr: false }
)
import './navbar.css'


const Navbar = () => {
  const user = useTelegramUser()
  console.log({ user })
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
