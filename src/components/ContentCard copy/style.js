import styled from "styled-components"
import { theme } from "../../styles/theme"

export const ContentContainerReverse = styled.div`
height: 100%;
width: 100vw;
display: flex;
gap: 2rem;
padding: 1rem;
border-top: 7px solid ${theme.colors.secondary};
border-radius: 30px;
background: linear-gradient(
    135deg,
    rgba(51,51,51, 0.7) 20%,
    rgba(51,51,51, 0.8) 30%,
    rgba(248,184,100, 1) 90%
  );
  @media (min-width: 992px) and (max-width: 1199px) { 

width: auto;
}
@media (max-width: 480px) {
    flex-direction: column-reverse; // Stack elements vertically
    padding: 1rem; // Adjust padding for mobile
}


`
export const TextContainerReverse = styled.div`
min-height: 100%;
width: 50%;
background-color: transparent;
display: flex;
gap: 2rem;
flex-direction: column;
align-items: center;
justify-content: space-around ;
p{
    width: max-content;
    font-size: 2rem;
    font-family: 'Gotham-Light';
    color: ${theme.colors.light};
    
}

@media (min-width: 992px) and (max-width: 1199px) { 
    p {
        font-size: 1.5rem;
    }
}

@media (min-width: 768px) and (max-width: 991px) {

p {
    font-size: 1.2rem;
}

}
@media (min-width: 481px) and (max-width: 767px) { 
    p {
        font-size: .8rem;
    }
}
@media (max-width: 480px) {
    width: 100%;
    p {
        font-size: 1rem;
    }
}



`

export const ImageContainerReverse = styled.div`
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
    object-fit: cover;
    border-radius: 5rem;
    border-bottom: 8px solid ${theme.colors.primary};
    
    }

    @media (max-width: 480px) {
    width: 100%; // Full width on mobile
    img {
        width: 100%; // Responsive image
        max-width: 100%; // Ensure image does not exceed container width
    }
    h5 {
        font-size: 1.5rem;
    }
}

    @media (min-width: 481px) and (max-width: 767px) { 
    h5 {
        font-size: 1rem;
    }
}

    @media (min-width: 768px) and (max-width: 991px) {

h5{
    font-size: 1.5rem;
}
img {
    width: 500px;
}
}

    @media (min-width: 992px) and (max-width: 1199px) {

h5 {
    font-size: 1.5rem;
}

}
`