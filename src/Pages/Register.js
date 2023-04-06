import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword,updateProfile, } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button, Container, Logo, Wrapper } from '../Components/Registerstyles';
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import Spinneranimation from '../Components/Spinner';
import { AnimatedLoader } from '../Components/Loginstyles';




const Register = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const [animation, setAnimation] = useState(false);
  const [loading, setLoading] = useState(false);

  //animattion on re-render
  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    //record all form events
    const email = e.target[0].value;
    const password = e.target[1].value;
    const displayName = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      setLoading(true)
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
            //   setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      // setLoading(false);
    }
  };

  return (

    <Container>
     { animation ? <Spinneranimation/> : <Wrapper>
        <Logo src='/assets/images/1A.jpg' alt='user' />
        <form onSubmit={handleSubmit}>
          <input placeholder='email address'
            type="email"
            name='email'

            required />
          <input placeholder='password'
            type="password" minLength="6"
            name='password'

            required />
          <input placeholder='username'
            type="text"
            name='username'

            required />
          <input type="file"
            name='file'

            id='picture' style={{ display: "none" }}
            required />
          <label htmlFor='picture'>
            <img src='/assets/images/picture.png' alt='profile' /> 
            <span>choose a profile picture</span>
          </label>
          {error && <span style={{ fontSize: "14px", color: "red", fontWeight: "200" }}>something went wrong...</span>}
          <Button>{loading ? <AnimatedLoader src='/assets/images/loading-gif2.gif' alt='loading'/> :" Sign up"}</Button>
          <hr />
        </form>
        <p >Already have an account?  <Link style={{textDecoration:"none"}} to="/login">Login</Link></p>
      </Wrapper>}
    </Container>

  )
}

export default Register
