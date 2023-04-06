import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color:  ${({theme}) => theme.colors.main};
display: flex;
align-items: center;
justify-content: center;

`

export const Wrapper = styled.div`
width: 90%;
height: 90%;
background-color:${({theme}) => theme.colors.completeblack};
display: flex;
border-radius: 10px;
overflow: hidden;
@media (max-width: ${({theme}) => theme.responsive.desktop}) {
  width: 100%;
  height: 100%;
}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
 display: none;
}
`

export const Wrappermobile = styled(Wrapper)`
 width: 100%;
 height: 100%;
 display: none;
 @media (max-width: ${({theme}) => theme.responsive.mobile}) {
 display: flex;
}

`

export const Left = styled.div`
height: 100%;
background-color:${({theme}) => theme.colors.completeblack};
display: flex;
flex:1;
flex-direction: column;
position: relative;
@media (max-width: ${({theme}) => theme.responsive.mobile}) {

}
`


export const Chatsdiv= styled.div`
display: flex;
flex-direction: column;
height: calc(100% - 200px);
overflow-y: hidden;
:hover{

  overflow-y: scroll;
}


`
export const Logo = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
@media (max-width: ${({theme}) => theme.responsive.desktop}) {

}
`

export const Userinfo = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
export const Username = styled.p`
font-size: 14px;
color:${({theme}) => theme.colors.whittish};
font-weight: 400px;
background-color:${({theme}) => theme.colors.chatfield};
border-radius: 3px;
padding: 2px;
font-weight: 400;
`

export const Userpicture = styled.img`
height: 30px;
width: 30px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
`

export const Right = styled.div`
height: 100%;
background-color:${({theme}) => theme.colors.whittish};
display: flex;
flex:2;
flex-direction: column;
@media (max-width: ${({theme}) => theme.responsive.mobile}) {

}
`
export const Topright = styled.div`
height: 20%;
width: 100%;
background-color:${({theme}) => theme.colors.completeblack};
display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;
`

export const Friendinfo = styled.div`
display: flex;
align-items: center;
`
export const Friendicons = styled.div`
display: flex;
align-items: center;
padding-right: 40px;
gap: 20px;
img{
width: 30px;
height: 30px;
cursor: pointer;
}
`

export const Friendname = styled.p`
font-size: 14px;
color:${({theme}) => theme.colors.whittish};
padding-left: 10px;
cursor: pointer;
`
export const Messages = styled.div`
height: 65%;
width: 100%;
background-color:${({theme}) => theme.colors.chatfield};
display: flex;
flex-direction: column;
:hover{

  overflow-y: scroll;
}
`
export const Message = styled.div`
display: flex;
gap: 20px;
margin: 10px;
margin-bottom: 20px;
flex-direction: ${({ direction }) => direction};
`
export const Messageinfo = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
 p {
  font-weight: 200;
  color:${({theme}) => theme.colors.whittish};
  font-size: 12px;
 }
`
export const Messagecontent = styled.div`
max-width: 80%;
display: flex;
flex-direction: column;
gap: 10px;

`

export const Usermessage = styled.div`
padding: 10px;
max-width: max-content;
background-color: ${({ og }) => (og? "gray" : "white")} ;
color: ${({ og }) => (og? "white" : "gray")} ;
border-radius: 0px 10px 10px 10px;
display: flex;

`

export const Bottomright = styled.div`
background-color:${({theme}) => theme.colors.mildblack};
height: 15%;
width: 100%;
padding: 10px;
display: flex;
justify-content: space-between;

`

export const Buttomicons = styled.div`
display: flex;
align-items: center;
padding-right: 10px;
gap: 20px;
img{
width: 30px;
height: 30px;
cursor: pointer;
}`
export const Logout = styled.button`
width: 4em;
height: 2em;
background-color:${({theme}) => theme.colors.whittish};
border: none;
border-radius: 5px;
color:  #1f1f1f;
cursor: pointer;
:hover{
  background-color:white;
  transform: scale(0.98);
}

@media (max-width: ${({theme}) => theme.responsive.desktop}) {
 left:2px;
 position: absolute;
 bottom: 10px;

}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
 left:45%;
 position: absolute;
bottom: 10px;

}
`
export const Sendmessage = styled.input`
width: 80%;
background-color: transparent;
padding: 10px;
font-size: 15px ;
border: none;
color:${({theme}) => theme.colors.whittish};
:focus{
  outline: none;
}
`

export const Button = styled.button`
width: 4em;
height: 2em;
background-color: #ebe8e4;
border: none;
border-radius: 5px;
color:${({theme}) => theme.colors.mildblack};
cursor: pointer;
:hover{
  transform: scale(0.98);
  background-color: whitesmoke;
}`


export const Changetheme = styled.img`
width: 30px;
height: 30px;
cursor: pointer;

:hover{

  transform: scale(0.98);
}


@media (max-width: ${({theme}) => theme.responsive.mobile}) {

} 
`

