import { use, useContext, useEffect, useState} from 'react'
import logo from '../bank-logo.png'
import { Link, useNavigate } from 'react-router';
import { userName } from '../utils/globestate';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    

    const name = useContext(userName);
    const navigate = useNavigate();

    const handlemenuopen = () => {
        setMenuOpen(!menuOpen);
    }
  
    const handlesignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/');
        }).catch((error) => {
        // An error happened.
        });
    }

    
        //console.log("Username in header:",name);
        const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                if (!user) {
                 navigate('/');
                   
                } 
                });
 


  return (
  
        <div className='bg-amber-950 py-3 px-3'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-10'>
               <Link to={"/dashboard"}> <img src={logo} alt='Bank Logo' className='h-10 w-auto'/>  </Link>
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
                    <div>
                    <p>{name}</p>
                    <button className='text-white border-b-2 text-sm' onClick={handlesignout}>LogOut</button>
                    </div>
                    </div>
                    
                    
                </div>     
            </div>
        </div>
        </div>
      
  )
}

export default Header