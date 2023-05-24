import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="bg-[#FAF4F2] flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
    </main>
  )
}
