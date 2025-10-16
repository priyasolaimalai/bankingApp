import React, {use, useState} from 'react'
import logo from '../bank-logo.png'
import { Link } from 'react-router';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handlemenuopen = () => {
        setMenuOpen(!menuOpen);
    }

  return (
  
        <div className='bg-amber-950 py-3 px-3'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-10'>
                <img src={logo} alt='Bank Logo' className='h-10 w-auto'/>  
                <div className='menuItems flex space-x-4'>
                    <div className='text-white text-md'><Link to={"/dashboard"}>Dashboard</Link></div>    
                    <div className='text-white text-md'><Link to={"/accountsummary"}>Account Summary</Link></div>    
                    <div className='text-white text-md'><Link to={"/beneficiary"}>Beneficiary</Link></div>   
                    <div className='text-white text-md'><Link to={"/fundtransfer"}>Fund transfer</Link></div>     
                </div> 
                </div> 
                <div className='userprofile'>
                    <div className='text-white text-md flex space-x-0 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 24 24" fill="transparent" stroke="white" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" fill="transparent"/>
                    <circle cx="12" cy="9" r="3" stroke="white"/>
                    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
                    </svg>
                    <p>John Doe</p></div>
                </div>     
            </div>
        </div>
        </div>
      
  )
}

export default Header