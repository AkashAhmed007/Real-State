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
import UpdateProfile from './Components/UpdateProfile.jsx';
import NotFound from './Components/NotFound.jsx';
import FirebaseProvider from './Components/FirebaseProvider/FirebaseProvider.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children:[
     { path:'/',
      element: <Home></Home>,
      loader:()=>fetch('/data.json')
    },
    {
      path:'/about',
      element: <About></About>
    },
    {
      path:'/card/:id',
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
      },
      {
        path:'/profile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
