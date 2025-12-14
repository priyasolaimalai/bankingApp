import React, { useState, useContext, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MainComponent from './MainComponent'
import AccountSummary from './AccountSummary'
import Beneficiary from './Beneficiary'
import FundTransfer from './FundTransfer'
import Dashboard from './Dashboard'
import Error from './Error'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import { userName } from '../utils/globestate'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Body = () => {

    const [name, setuserName] = useState(null);


    const appRouters = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement:<Error/>
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
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

    useEffect(() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.email;
          setuserName(uid);
            // ...
           
        } else {
            // User is signed out
            // ...
           
        }
        });
    }, [])
  return (
    
  <div>
    <userName.Provider value={name}>
    <RouterProvider router={appRouters}/>    
    </userName.Provider>
  </div>
  )
}

export default Body