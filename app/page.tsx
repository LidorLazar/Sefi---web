import About from './components/About'
import Extra from './components/Extra'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar name="שם מלא" description='ייעוץ משפחות והדרכת הורים' />
      <section className='flex flex-col items-center lg:mx-[14.5rem] mx-12 gap-8'>
      <About/>
      <Extra/>

      </section>
    </main>
  )
}
