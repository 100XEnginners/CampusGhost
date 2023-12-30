import Image from 'next/image'
import Signup from '@/components/Signup'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className=' h-[100vh] w-full flex flex-col justify-center items-center'>
    <Signup/>
  </div>
      
  )
}
