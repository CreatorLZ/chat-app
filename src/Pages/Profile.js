import React from 'react'
import { Container, Wrapper } from '../Components/Profilestyles'

const Profile = () => {
  return (
    <Container>
        <Wrapper>
        <img src='/assets/images/person3.jpg' alt='user' /> 
        <h2 style={{color:"white", paddingTop:"120px"}}>Jason butterman</h2>
        <span style={{color:"whitesmoke", marginTop:"3px", fontWeight:"small" , }}>Winter is coming</span>
        <p>Phone: +2347956765678</p>
        <p>Phone: +2347956765678</p>
        </Wrapper>
    </Container>
  )
}

export default Profile
