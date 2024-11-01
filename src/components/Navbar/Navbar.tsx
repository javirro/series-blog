import Link from 'next/link'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <Link href="/" className='link'>Series Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar
