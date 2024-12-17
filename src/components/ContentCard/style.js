import styled from "styled-components"
import { theme } from "../../styles/theme"

export const ContentContainer = styled.div`
height: 100%;
width: 100vw;
display: flex;
gap: 2rem;
padding: 3rem 3rem 3rem 3rem;
border-top: 7px solid ${theme.colors.secondary};
border-radius: 30px;
background: linear-gradient(
    -135deg,
    rgba(51,51,51, 0.7) 20%,
    rgba(51,51,51, 0.8) 30%,
    rgba(248,184,100, 1) 90%
  );



`

export const ImageContainer = styled.div`
height: 100%;
width: 50%;
background-color: transparent;
font-family: 'Gotham-Black';
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: space-around;




h5{
    font-size: 2.5rem;
    font-family: 'Gotham-Black';
    color: ${theme.colors.light};
}
img{
    width: 700px;
    border-radius: 5rem;
    border-bottom: 8px solid ${theme.colors.primary};
}
`

export const TextContainer = styled.div`
min-height: 100%;
width: 50%;
background-color: transparent;
display: flex;
gap: 2rem;
flex-direction: column;
align-items: center;
justify-content: space-between;
p{
    width: 600px;
    font-size: 2.4rem;
    font-family: 'Gotham-Light';
    color: ${theme.colors.light};
}


`