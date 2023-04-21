
import Image from 'next/image'
import Hero from '../components/Hero';
import Analytic from '@/components/Analytics';
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="">
      <Hero heading='Captur Agency' message='Proporcionamos los mejores servicios digitales' />
      <Analytic />
      <Footer/>

      
      
    </main>
  )
}
