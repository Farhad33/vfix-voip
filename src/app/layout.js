import StyledComponentsRegistry from '../lib/registry'
import { Quicksand } from 'next/font/google'
import './Globalstyle.css'
import Navbar from '@/common/navbar/Navbar'
import Footer from '@/common/footer/Footer'
import Head from 'next/head'


const  quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

// export const metadata = {
//   title: 'Vfix Voip',
//   description: 'Voip',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      {/* <link rel="icon" href="app/favicon.ico" sizes="any" /> */}
        <title>Vfix</title>
      </Head>
      <body className={quicksand.className}>
        <Navbar/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}

