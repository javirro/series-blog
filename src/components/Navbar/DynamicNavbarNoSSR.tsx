import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./Navbar'), { ssr: false })

export default DynamicComponentWithNoSSR
