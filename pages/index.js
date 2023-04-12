import Image from 'next/image'
import { Inter } from 'next/font/google'
import Gallery from './Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Gallery></Gallery>
    </div>
  )
}
