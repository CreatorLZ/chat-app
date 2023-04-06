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
height: 80%;
width: 35%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5px 10px;
background-color: ${({theme}) => theme.colors.chatfield};


 input {
    width: 60%;
    padding: 10px;
    border: none;
    margin-bottom: 20px;
    border-radius: 3px;
    :focus{
        outline: 2px solid #1c1c1c;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 70%;
    }
}

p{
    margin-top: 20px;
    font-size: 14px;
    color:  ${({theme}) => theme.colors.whittish};
}

form{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
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
}

@media (max-width: ${({theme}) => theme.responsive.desktop}) {
width: 50%;
}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
width: 80%;

}
`

export const Logo = styled.img`
height: 70px;
width: 70px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
`
export const Button = styled.button`
padding: 10px;
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
`