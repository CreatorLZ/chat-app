import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { Chatinfo, Chatscontainer, Friendpic, Lastmessage } from './Chatstyels'

const Chats = () => {
    const { currentUser } = useContext(AuthContext)
    const [chats, setChats] = useState([])
    useEffect(()=>{
      const getChats = () =>{
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data())
        });

        return()=>{
            unsub();
        };
      };

      currentUser.uid && getChats();
    },[currentUser.uid]);
  
  return (
    <>
   { chats && Object.entries(chats)?.map((chat)=>(
    <Chatscontainer key={chat[0]}>
       <Friendpic src={chat[1].userInfo.photoURL} alt='friend' />
       <Chatinfo>
                <p style={{ color: "white", fontWeight: "bold" }}>{chat[1].userInfo.displayName}</p>
                <Lastmessage>{chat[1].userInfo.lastmessage?.text}</Lastmessage>
              </Chatinfo>
    </Chatscontainer>
    ))}
    </>
  )
}

export default Chats
