import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color:  ${({theme}) => theme.colors.main};
display: flex;
align-items: center;
justify-content: center;
position: relative;

`
export const Wrapper = styled.div`
width: 70%;
height: 70%;
background-color:${({theme}) => theme.colors.completeblack};
display: flex;
border-radius: 10px;
overflow: hidden;
align-items: center;
flex-direction: column;


img{
    width:180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    position:absolute;
    top: 25px;
}
@media (max-width: ${({theme}) => theme.responsive.mobile}) {
 display: none;
}

p{
    font-weight: bold;
    color: white;

}

`