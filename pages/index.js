import Image from 'next/image'
import { Inter } from 'next/font/google'
import Gallery from './gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Gallery></Gallery>
    </div>
  )
}
