import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
height: auto;
width: 100vw;
background-color: ${theme.colors.primary};

`


export const Title = styled.div`
 height: 10%;
 display: flex;
 padding: 1rem;
 align-items: center;
 justify-content: center;

 h1{
    font-size: 4.5rem;
    color: ${theme.colors.secondary};
    font-family: 'GothamBlack';
 }


`

export const ReviewBox = styled.div`

display: flex;
gap: .1rem;
justify-content: space-around;
padding: 2rem;
`