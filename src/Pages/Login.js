import React, { useEffect,  useState } from 'react'
import { AnimatedLoader, Button, Container, Email, Logo, Password, Wrapper } from '../Components/Loginstyles';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Spinneranimation from '../Components/Spinner';





const Login = () => {
const navigate = useNavigate()
const [error, setError] = useState(false)
const [animation, setAnimation] = useState(false);
const [loading, setLoading] = useState(false);

  //animattion on re-render
  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, []);

const handleSubmit = async(e) => {
    e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  setLoading(true)
 try{
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
 }catch (error){
    setError(true);
    setLoading(false)
 }
}
  return (
    
      <Container>
        {animation ? <Spinneranimation /> : <Wrapper>
        <Logo src='/assets/images/1A.jpg' alt='user'/>
            <form onSubmit={handleSubmit}>
            <Email placeholder='Email address'
             type="email"
              name='email'
               required/>
            <Password placeholder='Password'
              type="password" minLength="6" 
              name='password' 
              required/>
              <div style={{display:"flex", width:"60%",alignItems:"center",fontSize:"14px", gap:"10px", color:"whitesmoke", justifyContent:"flex-start"}}>
              <input type="checkbox" style={{cursor:"pointer"}}/>
              <span>Show password</span>
              </div>
            
            <Button>{loading ? <AnimatedLoader src='/assets/images/loading-gif2.gif' alt='loading'/> :" Log in"}</Button>
            {error && <span style={{ fontSize: "14px", color: "red", fontWeight: "200" }}>something went wrong...</span>}
            <p style={{cursor:"pointer"}}>Forgotten password?</p>
            <hr/>
            </form>
            <p>or</p>
            <Link style={{width:"80%",display:"flex", justifyContent:"center", textDecoration:"none"}} to="/register"> <Button>create a new account</Button></Link>
        </Wrapper>}
      </Container>
    
  )
}

export default Login
