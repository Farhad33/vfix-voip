import StyledComponentsRegistry from '../lib/registry'
import { Quicksand } from 'next/font/google'
import './Globalstyle.css'
import Navbar from '@/common/navbar/Navbar'
import Footer from '@/common/footer/Footer'


const  quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}

