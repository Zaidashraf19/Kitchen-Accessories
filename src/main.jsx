import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Card from './pages/cart'
import Products from './Pages/products'
import SingleProduct from './pages/singleproducts'
import Contact from './pages/Contactus'
import Checkout from './pages/checkout'
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cart',
        element: <Card />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'product/:id',
        element: <SingleProduct />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'cart/checkout',
        element: <Checkout />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Provider>
)