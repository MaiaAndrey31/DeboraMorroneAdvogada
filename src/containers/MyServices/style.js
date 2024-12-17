import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
width: 100vw;
height: 100%;
background-color: ${theme.colors.secondary};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem ;
gap: 2rem;


h1{
    font-size: 5rem;
    color: ${theme.colors.primary};
    font-family: 'Gotham-Black';
    padding-bottom: 0.5rem;
    border-bottom: 8px double ${theme.colors.primary};
}

`

