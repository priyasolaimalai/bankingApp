import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainComponent from './MainComponent'
import AccountSummary from './AccountSummary'
import Beneficiary from './Beneficiary'
import FundTransfer from './FundTransfer'
import Error from './Error'
import { createBrowserRouter, RouterProvider } from 'react-router'

const Body = () => {
    const appRouters = createBrowserRouter([
        {
            path:"/",
            element:<MainComponent/>,
            errorElement:<Error/>
        },
        {
            path:"/dashboard",
            element: <MainComponent/>
        },
        {
            path:"/accountsummary",
            element:<AccountSummary/>
        },
        {
            path:"/beneficiary",
            element:<Beneficiary/>
        },
        {   
            path:"/fundtransfer",
            element:<FundTransfer/>
        },
        
        
    ])
  return (
    
  <div>
    <RouterProvider router={appRouters}/>    
  </div>
  )
}

export default Body