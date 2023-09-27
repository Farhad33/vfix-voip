import StyledComponentsRegistry from '../lib/registry'
import { Quicksand } from 'next/font/google'
import './Globalstyle.css'
import Navbar from '@/common/navbar/Navbar'
import Footer from '@/common/footer/Footer'
import Contactus from '@/common/contactus/ContactUs'



const  quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  icons: [{ rel: 'icon', type: 'image/ico', url: '/favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StyledComponentsRegistry>
          <Navbar/>
          {children}
          <Contactus />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

