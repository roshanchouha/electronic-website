import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './component/common/Signup/Signup'
import HomeData from './component/HomeData/HomeData'

function App() {
  const [count, setCount] = useState(0)

const routes = createBrowserRouter([{
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element:  <HomeData />   },
      { path: '/cart', element: <h1>Cart</h1> },
      { path: '/about', element: <h1>About Us</h1>},
      {path: '/signup', element: <Signup/>},
      {
        path: '*',
        element: <h1>Not Found</h1>,
      }
    ],
}])

  return (
    <>
       <RouterProvider router={routes} />
    </>
  )
}

export default App
