import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { Userpicture } from './Homestyles';
import { AuthContext } from "../context/AuthContext";

const SearchUser = styled.input`
width: 100%;
background-color:transparent;
color:${({ theme }) => theme.colors.whittish};
padding: 10px;
border: none;
border-bottom: 1px solid gray;
outline:none;
:focus{
  outline:none;

}
@media (max-width: ${({ theme }) => theme.responsive.desktop}) {
 display: flex;
}
@media (max-width: ${({ theme }) => theme.responsive.mobile}) {
 display: flex;
}
`
const Searchresult = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 5px;
color:${({ theme }) => theme.colors.whittish};
padding: 10px;
font-size: 14px;

:hover{
    background-color:${({ theme }) => theme.colors.chatfield};
    cursor: pointer; 
}
`

const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)
    const { currentUser } = useContext(AuthContext)

    const handleSearch = async () => {

        const usersRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(usersRef, where("displayName", "==", username))
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setError(true)
            console.log("theres been an error")
        }
    }
    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }
    const handleSelect = async () => {
       
        //check whether the collection(chats collection) exists in firestore
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId))
            if(!res.exists()){
            //create a chats document in chats collection to store messages(chats) for both users(currentUser and friend)
                await setDoc(doc(db,"chats", combinedId),{messages:[]})

            //create  user chats
            await updateDoc(doc(db, "userChats", currentUser.uid),{
                [combinedId+".userInfo"]:{
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL:user.photoURL
                },
                [combinedId+".date"]:serverTimestamp()
            });

            await updateDoc(doc(db, "userChats", user.uid),{
                [combinedId+".userInfo"]:{
                    uid:currentUser.uid,
                    displayName: currentUser.displayName,
                    photoURL:currentUser.photoURL
                },
                [combinedId+".date"]:serverTimestamp()
            });
            }
        } catch (err) {

        }
        setUsername("")
        setUser(null)
    }
    return (
        <>

            <SearchUser placeholder='find a user'
             onKeyDown={handleKey}
              onChange={e => setUsername(e.target.value)}
              value={username}
              />
            {error && <span style={{ color: "red" }}>User not found</span>}
            {user &&
                <Searchresult onClick={handleSelect}>
                    <Userpicture src={user.photoURL} alt='friend' />
                    <span>{user.displayName}</span>
                </Searchresult>
            }

        </>
    )
}

export default Search


