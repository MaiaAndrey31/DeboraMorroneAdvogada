import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
height: auto;
width: auto;
background-color: ${theme.colors.primary};

@media (min-width: 992px) and (max-width: 1199px) {
   padding: 1rem 0.2rem ;
}
@media (min-width: 768px) and (max-width: 991px) {
padding: 2rem;

}

@media (max-width: 480px) {
   padding: 1rem; // Adjust padding for mobile
}
`

export const Title = styled.div`
 height: 10%;
 display: flex;
 padding: 1rem;
 align-items: center;
 justify-content: center;

 h1 {
    font-size: 4.5rem;
    color: ${theme.colors.secondary};
    font-family: 'GothamBlack';
 }

 @media (max-width: 480px) {
    h1 {
        font-size: 2.5rem; // Adjust font size for mobile
    }
 }
`

export const ReviewBox = styled.div`
display: flex;
width: 80%;
flex-direction: column;
gap: .8rem;
justify-content: space-around;
padding: 2rem;



@media (min-width: 992px) and (max-width: 1199px) {
   flex-direction: column;
   
   justify-content: center;
   align-items: center;

}
@media (min-width: 768px) and (max-width: 991px) {
flex-direction: column;
padding: 0rem 4rem;
gap: 1.2rem;
justify-content: center;
align-items: center;
}

@media (max-width: 480px) {
   flex-direction: column; // Stack reviews vertically on mobile
   padding: 1rem; // Adjust padding for mobile
}

`
