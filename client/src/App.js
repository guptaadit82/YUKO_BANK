import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Contact from './components/Contact';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

import AddBankDetail from './components/AddBankDetail';
import BankList from './components/BankList';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import History from './components/History';



/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path:'/history',
        element:<History></History>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path:'/accounts',
        element:<BankList></BankList>
    },
   
    {
        path:'/add',
        element:<AddBankDetail></AddBankDetail>
    },{
        path:'/transaction',
        element:<Transaction></Transaction>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },{
        path:'/Contact',
        element: <Contact></Contact>
    },
    {
        path: '/About',
        element : <About></About>
    },{
        path: '/Balance',
        element:<Balance></Balance>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
