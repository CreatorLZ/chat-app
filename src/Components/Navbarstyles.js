import styled from "styled-components";

export const NavbarContainer = styled.div`
height: 100px;
width: 100%;
background-color:${({theme}) => theme.colors.mildblack};
display: flex;
padding: 10px;
align-items:center;
justify-content: space-between;
position: relative;
@media (max-width: ${({theme}) => theme.responsive.mobile}) {

}
`

export const UserModal = styled.div`
position:absolute;
padding:${({navbar}) => (navbar ? '5px 5px' : '0px 0px')};
border-radius: 10px;
background-color:${({theme}) => theme.colors.whittish};
top: ${({navbar}) => (navbar ? '80px' : '70px')};
opacity: ${({navbar}) => (navbar ? '1' : '0')};
transition: 450ms;
right:10px;
display: flex;
flex-direction: column;

ul {
    list-style: none;
    width: 100%;
    li{
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        :hover{
            background-color:${({theme}) => theme.colors.chatfield};
        }
    }
}
`