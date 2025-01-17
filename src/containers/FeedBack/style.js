import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
height: auto;
width: auto;
background-color: ${theme.colors.primary};


@media (min-width: 992px) and (max-width: 1199px) {

   padding: 1rem 0.2rem ;
}
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

@media (min-width: 992px) and (max-width: 1199px) {

   flex-direction: column;
   max-width: auto;
   
   justify-content: center;
   align-items: center;
 }

`