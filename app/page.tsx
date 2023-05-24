import About from '@/app/components/About'
import Extra from '@/app/components/Extra'
import Navbar from '@/app/components/Navbar'
import ContactMe from "@/app/componnent/Contact me";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar name="שם מלא" description='ייעוץ משפחות והדרכת הורים' />
      <section className='flex flex-col items-center lg:mx-[14.5rem] mx-12 gap-8'>
        <About />
        <Extra />
        <ContactMe />
      </section>
    </main>
  )
}
