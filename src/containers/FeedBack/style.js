import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
height: 100vh;
width: 100%;
background-color: ${theme.colors.primary};

`


export const Title = styled.div`
 height: 10vh;
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