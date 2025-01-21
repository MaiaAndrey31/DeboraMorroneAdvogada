import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
width: max-content;
height: max-content;
    
    @media (max-width: 768px) {
        padding: 0.5rem; // Adjust padding for mobile
    }
display: flex;
align-items: center;
justify-content: center;

:hover {
    cursor: pointer;
    transition: ease-in-out 0.5s;
    transform: scale(0.99);
    opacity: 0.79;
}

@media (max-width: 480px) {
    padding: 0.5rem; // Adjust padding for mobile
}
`

export const ContainerButton = styled.button`
position: relative;
display: flex;
gap: 8px;
    padding: 1rem 2rem; 
    @media (min-width: 481px) and (max-width: 767px) {
        padding: 0.75rem 1.5rem; // Adjust padding for compact devices
    }
align-items: center;
justify-content: center;
width: 100%;
max-width: 480px;
height: 52px;
border: 0;
border-radius: 8px;
background-color: ${theme.colors.primary};
color: ${theme.colors.light};
font-family: 'Gotham-Black';
font-size: 20px;
text-shadow:  1px  2px 4px ${theme.colors.dark};

.icon {
    opacity: .8;
    font-size: 30px;
}

@media (max-width: 480px) {
    font-size: 16px; // Adjust font size for mobile
    padding: 0.5rem 1rem; // Adjust padding for mobile
}`
