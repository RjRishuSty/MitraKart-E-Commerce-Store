import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';

const App = () => {

  const router = createBrowserRouter([ 
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App