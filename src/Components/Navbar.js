import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import {NavbarContainer, UserModal} from '../Components/Navbarstyles'
import { auth } from '../firebase'
import {  Userinfo, Username, Userpicture } from './Homestyles'
import { Logo } from './Homestyles'
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
const {currentUser} = useContext(AuthContext)
const [navbar,setNavBar] = useState(false)

const toggleNav = () => {
  setNavBar(!navbar)
}
    
    const handleSignOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
         console.log("User has logged out")
        }).catch((error) => {
          console.log(error);
        })
      }
  
    return (
   
      <NavbarContainer>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

              <Logo  src='/assets/images/1A.jpg' alt='user' />
              <span style={{ fontWeight: "bold", color: "white" }}>Across</span>
            </div>

            <Userinfo>
              <Userpicture src={currentUser.photoURL} alt='user' />
              <Username >{currentUser.displayName}</Username>
              <img onClick={toggleNav} style={{height:"30px", cursor:"pointer"}} src='assets/images/menu2.png' alt='menu' />
             <UserModal navbar={navbar}>
                <ul>
                  <li>Profile</li>
                  <li onClick={handleSignOut}>Log out</li>
                </ul>
              </UserModal>
            </Userinfo>
          </NavbarContainer>
    
  )
}

export default Navbar
