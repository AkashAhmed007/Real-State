import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import About from './Pages/About.jsx';
import Features from './Pages/Features.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
     { path:'/',
      element: <Home></Home>
    },
    {
      path:'/about',
      element: <About></About>
    },
    {
      path:'/feature',
      element:<Features></Features>
    },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
