import styled from "styled-components"

export const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
background-color: ${({theme}) => theme.colors.main};
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
height: 90%;
width: 35%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5px 10px;
background-color: ${({theme}) => theme.colors.chatfield};




p{
   
    font-size: 14px;
    color:  ${({theme}) => theme.colors.whittish};
    margin-Top:10px;
}

form{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
     img{
    width: 30px;
    height: 30px;
    cursor: pointer;
    }
    label{
        display: flex;
        align-items: center;
        gap: 10px;
        color: whitesmoke;
        font-size: 12px;
        cursor: pointer;
    }
}

hr{
    width:80%;
    margin-top: 20px;
}

@media (max-width: ${({theme}) => theme.responsive.desktop}) {
width: 50%;
height: 95%;
}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
width: 80%;
height: 95%;
}
`

export const Logo = styled.img`
height: 70px;
width: 70px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
margin: 20px;
`
export const Button = styled.button`
padding: 0px 16px;
height: 50px;
background-color:  ${({theme}) => theme.colors.completeblack};
border: none;
border-radius: 5px;
color:  ${({theme}) => theme.colors.whittish};
cursor: pointer;
margin-top: 20px;
margin-bottom: 20px;
width: 60%;
:hover{
    
}
@media (max-width: ${({theme}) => theme.responsive.desktop}) {
width: 70%;

}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
width: 70%;

}
`
export const Email = styled.input`
   width: 60%;
    padding: 15px 16px;
    padding-left: 50px;
    border: none;
    margin-bottom: 20px;
    border-radius: 3px;
    background: url("./assets/images/sms.png") no-repeat scroll 7px 7px;
    background-color: white;
    background-position: 5%;
    :focus{
        outline: 2px solid #1c1c1c;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 70%;
    }
`
export const Password = styled.input`
  width: 60%;
   padding: 15px 16px;
    padding-left: 50px;
    border: none;
    margin-bottom: 20px;
    border-radius: 3px;
    background: url("./assets/images/lock2.png") no-repeat scroll 7px 7px;
    background-color: white;
    background-position: 5%;
    :focus{
        outline: 2px solid #1c1c1c;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 70%;
    }
`

export const AnimatedLoader = styled.img`
width: 1px;
height: 1px;
object-fit: cover;
`