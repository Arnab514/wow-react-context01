import React, { useContext } from 'react'
import { useState } from "react";
import userContext from '../context/userContext';
// import userContextProvider from '../context/userContextProvider';

const Login = () => {

   const {setUser} = useContext(userContext)
   
   const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
   }
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")


  return (
    <div>
      <input type="text" placeholder='Username' value={username}
      onChange={(e) => {setUsername(e.target.value)}} />
      {" "}{"------------"}{" "}
      <input type="password" placeholder='Password' value={password}
      onChange={(e) => {setPassword(e.target.value)}} />
      {" "}{"-----"}{" "}
      <button type="button" onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
