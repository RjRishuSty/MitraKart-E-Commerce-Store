import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import HelpCenter from './pages/HelpCenter';
import OrederTracking from './pages/OrederTracking';

const App = () => {

  const router = createBrowserRouter([ 
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'help-center',
          element:<HelpCenter/>
        },
        {
          path:'order-tracking',
          element:<OrederTracking/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App