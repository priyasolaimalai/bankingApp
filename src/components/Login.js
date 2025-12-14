import React, { useEffect, useRef , useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { checkloginInput } from '../utils/validate'
import '../.config/authentication';
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router';


const Login = () => {

    const [errormsg, setErrormsg] = useState(null);

    const navigate = useNavigate();

    const username = useRef(null);
    const password = useRef(null);


    const handleLoginForm=()=>{
        
        const err = checkloginInput(username.current.value,password.current.value);
       console.log("Error msg:",err);

        setErrormsg(err.map( (item, index) => <div key={index}>{item}</div>));
        
        if(err.length !== 0) return;
       
        // sign in logic with firebase
    

            const auth = getAuth();
            signInWithEmailAndPassword(auth, username.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
              //  updateProfile(auth.currentUser, {
                 //   displayName: 'Priya'
                 // })
              
                navigate('/dashboard');

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormsg(`Error [${errorCode}]: ${errorMessage}`);
            });
    }


  return (
  
    <div className='flex justify-center items-center bg-slate-100 h-screen'>
        <div className='bg-zinc-600 p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-6 text-white text-center'>Login</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
                {errormsg && 
                    <div className='text-sm text-gray-200 mb-2 rounded' style={{fontStyle: "italic"}}>{errormsg}</div>
                }
                                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='username'>Email ID</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='email' id='username' placeholder='Enter your username' ref={username}/>
                </div>
                <div className='mb-6'>
                    <label className='block text-white mb-2' htmlFor='password'>Password</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='password' id='password' placeholder='Enter your password' ref={password} />
                </div>
                <button className='w-full bg-amber-950 text-white py-2 rounded hover:bg-amber-800 transition duration-300' type='submit' onClick={handleLoginForm}>Login</button>
            </form>
        </div>

    </div>

  )
}

export default Login