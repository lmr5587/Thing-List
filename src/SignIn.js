import React from 'react'
import { auth, githubProvider} from './base'
import './SignIn.css'

const SignIn = () => {
    const authentication=(provider)=>{
        auth.signInWithPopup(provider)
    }
  return (
    <button 
        className="SignIn" 
        onClick={()=>authentication(githubProvider)}
    >
      Sign In With GitHub
    </button>
  )
}

export default SignIn