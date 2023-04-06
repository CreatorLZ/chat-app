import styled from 'styled-components'

export const Chatscontainer = styled.div`
display: flex;
align-items: center;
height: 80px;
padding: 10px;
:hover{
  background-color: #5e5e5e;
  cursor: pointer;
}
`
export const Friendpic = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;
`

export const Chatinfo = styled.div`
display: flex;
flex-direction: column;
margin:10px;
`
export const Lastmessage = styled.p`
font-size: 12px;
color: white;
`