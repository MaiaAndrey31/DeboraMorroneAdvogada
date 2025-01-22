import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
position: relative;
flex-direction: row;
justify-content: space-around;
background-color: ${theme.colors.primary};
min-width: 100%;
height: auto;
z-index: 2;

.icon {
    color: ${theme.colors.secondary};
}

@media (min-width: 1200px) and (max-width: 1919px) {
    padding: 1rem;
}

@media (min-width: 992px) and (max-width: 1199px) { 
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

@media (min-width: 768px) and (max-width: 991px) { 

    padding: 0.8rem 0;
}





@media (max-width: 480px) { 
    flex-direction: column;
    gap: 1rem;
    padding: 1rem; // Adjust padding for mobile
}

@media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    min-width: 100%; 
    flex-direction: column;
    gap: 0.6rem;
    padding: 1rem;
    justify-content: space-around;


  }
`

export const Contact = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.40rem;

a {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0.40rem;
}

p {
    color: ${theme.colors.light};
    font-size: 1.2rem;
    font-family: 'Gotham-Light';
    font-weight: light;
}

@media (min-width: 768px) and (max-width: 991px) { 

    p {
        font-size: 1.2rem;
    }

}

@media (max-width: 480px) { 
    p {
        font-size: 1rem; // Adjust font size for mobile
    }
} `
