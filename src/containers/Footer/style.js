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

@media (min-width: 992px) and (max-width: 1199px) { 
height: 30vh;
width: auto;
}

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

@media (min-width: 992px) and (max-width: 1199px) {
    object-fit: fill;
    
    img {
        width: 190px;
    }
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

@media (min-width: 992px) and (max-width: 1199px) {

    p {
        font-size: 1.2rem;
    }
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
    
}
@media (min-width: 992px) and (max-width: 1199px) {

p {
    font-size: 1rem;
}
}
`
