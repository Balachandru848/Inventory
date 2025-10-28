import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Sales from './Pages/Sales'
import Inventory from './Pages/Inventory'
import Customer from './Pages/Customer'
import Report from './Pages/Report'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Customerbills from './Components/Customerbills'
import Purchase from'./Pages/Purchase'
import Settings from './Pages/Settings'
import Login from './Pages/login'

const router = createBrowserRouter([
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/Home",
          element:<Home/>
        },
        {
          path:"/Sales",
          element:<Sales/>
        },
        {
          path:"/Inventory",
          element:<Inventory/>
        },
        {
          path:"/Customer",
          element:<Customer/>
        },
        {
          path:"/Report",
          element:<Report/>
        },
        {
          path:"/Settings",
          element:<Settings/>
        },
        {
          path:"/Login",
          element:<Login/>

        },{
          path:"/Purchase",
          element:<Purchase/>
        }
    ])

function App(){

  return (
    
    <div className='h-svh p-2'>
      {/* <Home/> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  )
}

export default App
