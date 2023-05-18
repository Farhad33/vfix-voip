import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import FirstPage from './components/FirstPage'
import Pricing from './components/Pricing'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App