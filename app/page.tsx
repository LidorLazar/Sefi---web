import About from '@/app/components/About'
import Extra from '@/app/components/Extra'
import Navbar from '@/app/components/Navbar'
import ContactMe from "@/app/components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar name="שם מלא" description='ייעוץ משפחות והדרכת הורים' />
      <section className='flex flex-col items-center lg:mx-[14.5rem] mx-8 gap-8'>
        <About />
        <Extra />
      </section>
      <ContactMe />
    </main>
  )
}
