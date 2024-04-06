import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import {auth,provider} from '../firebase';
import { useStateValue } from '../State/StateProvider';
import {actionTypes} from '../State/reducer';


function Login() {
  const [state, dispatch] = useStateValue();

    const signIn = () =>{
      auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,

        })
        
      }).catch((error) => alert(error.message));
    
    };


  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='/images/fb-logo.png' alt=''></img>
            <img src='/images/fb-logo2.png' alt=''></img>
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login