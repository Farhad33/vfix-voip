import StyledComponentsRegistry from '../lib/registry'
import { Quicksand } from 'next/font/google'
import Navbar from '@/common/navbar/Navbar'
import { createGlobalStyle } from 'styled-components'
import './Globalstyle.css'


const  quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

// const GlobalSyled = createGlobalStyle`
// html,
// body {
//     padding: 0;
//     margin: 0;
// }



// * {
//     box-sizing: border-box;
// }
// `;


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={quicksand.className}>
        {/* <GlobalSyled /> */}
          <Navbar/>
          {/* <p>Navbar</p> */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          {/* <Navbar/> */}

      </body>
    </html>
  )
}

