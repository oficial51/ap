import Navbar from '@/components/Navbar'
import './globals.css'
import { Raleway } from 'next/font/google'

const montserrat = Raleway({ subsets: ['latin'] })


export const metadata = {
  title: 'Captur',
  description: 'Your preferred Tech agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen bg-black '>
      <main className={montserrat.className}>
          <Navbar />
          {children}
        </main>
        </body>
    </html>
  )
}
