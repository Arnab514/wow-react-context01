import React, {useContext} from 'react'
import userContext from '../context/userContext'
// import userContextProvider from '../context/userContextProvider'

const Profile = () => {

    const {user} = useContext(userContext)
  
    if(!user) return <div> please Log in </div>

    else return <div> Welcome {user.username} </div>
}

export default Profile
