import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
position: relative;
flex-direction: row;
justify-content: space-around;
background-color: ${theme.colors.primary} ;
min-width: 100%;
height: auto;
z-index: 2;
position: relative;

@media (min-width: 992px) and (max-width: 1199px) { 
flex-direction: column;
align-items: center;
justify-content: center;

}


@media (max-width: 480px) { 
    flex-direction: column;
    gap: 1rem;
   
}
`

export const ContainerLeft = styled.div`
display: flex;
width: 100%;
align-items: center;
padding-left: 1rem;

.icon {
    color: ${theme.colors.secondary};
    
}

@media (min-width: 992px) and (max-width: 1199px) {
    
     
    align-items: center;
    justify-content: center;
 }
@media (max-width: 480px) { 
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

@media (min-width: 992px) and (max-width: 1199px) {

flex-direction: column;
align-items: start;


}
@media (max-width: 480px) { 
    
}
`

export const Contact = styled.div`
display: flex;
align-items: center;
gap: 0.40rem;

p {
    color: ${theme.colors.light};
    font-family: 'Gotham-Light';
    font-weight: light;
    
}
@media (max-width: 480px) { 
    margin: 0 auto;
}


`