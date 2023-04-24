import Hero from '../components/Hero';
import Analytic from '@/components/Analytics';
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="">
      <Hero heading='Captur Agency' message='Proporcionamos los mejores servicios' />
      <Analytic />
      <Newsletter></Newsletter>
      <Footer/>

      
      
    </main>
  )
}
