import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
height: 50vh;
width: 100%;
display: flex;
gap: 2rem;
align-items: center;
justify-content: space-around;
background-color: ${theme.colors.dark};

`


export const ContainerLeft = styled.div`
width: 30%;
padding: 1rem;
display: flex;
flex-direction: column;
gap:2rem;
background-color: ${theme.colors.primary};
border-radius:   30px 100000px 100px 10000px;
img{
    max-width: 250px;
}
`
export const ContainerCenter = styled.div`
width: 30%;
padding: 1rem;
display: flex;
align-items: center;
flex-direction: column;
gap:2rem;
p {
    color: ${theme.colors.light};
    font-family: 'Gotham-Light';
    font-weight: light;
    font-size: 1.4rem;
    
}


`
export const ContainerRight = styled.div`
padding-right: 1rem;
display: flex;
flex-direction: column;
gap:2rem;


`


export const Contact = styled.div`
display: flex;
align-items: center;
gap: 0.40rem;

p {
    color: ${theme.colors.light};
    font-family: 'Gotham-Light';
    font-weight: light;
    font-size: 1.4rem;
    
}`
