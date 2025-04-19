import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Login from './pages/login'
import Register from './pages/register'
import Card from './pages/cart'
import Products from './Pages/products'
import SingleProduct from './Pages/singleproducts'
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'cart',
        element: <Card/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'product/:id',
        element: <SingleProduct/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
  </Provider>
)