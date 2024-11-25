import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${theme.colors.primary} ;
min-width: 100%;
min-height: 40px;
max-height: 80px;


`

export const ContainerLeft = styled.div`
display: flex;
gap: 1rem;
align-items: center;
padding-left: 1rem;

.icon {
    color: ${theme.colors.secondary};
    
}

`

export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 1rem;
padding-right: 1rem;

.icon {
    color: ${theme.colors.secondary};
    
}
`

export const Contact = styled.div`
display: flex;
align-items: center;
gap: 0.40rem;

p {
    color: ${theme.colors.secondary};
    font-family: 'Gotham-Light';
    font-weight: light;
    
}

`