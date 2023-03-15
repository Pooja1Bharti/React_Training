import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import BottomNav from './BottomNav'
import Dashboard from './Dashboard'
import Login from './Login'
import MuiNavbar from './MuiNavbar'

import Products from './Products'
import RegForm from './RegForm'
import Setpassword from './Setpassword'
import SetPassword1 from './SetPassword1'
import TodoList from './TodoList'
import Users from './Users'
import Posts from './Posts'

function RouterApp() {

    const router = createBrowserRouter([
        {path:'/', element:<Login />},
        {path: '/regForm', element:<RegForm />},
        {path: '/dashboard', element:<Dashboard />},
        // {path: '/mui', element:<MuiNavbar />},
        {path:'/setpassword', element:<Setpassword />},
        {path:'/products', element:<Products />},
        {path:'/posts', element:<Posts/>},
        {path:'/users', element:<Users />},
        {path:'/todos', element:<TodoList />}
    ])
  return (
    <div className="wrapper">
    <MuiNavbar />
    <RouterProvider router={router} />
    <BottomNav />
    </div>
  )
}

export default RouterApp