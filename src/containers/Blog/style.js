import styled from "styled-components"
import { theme } from "../../styles/theme"



export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
gap: 0.5rem;
background-color: ${theme.colors.secondary};

@media (min-width: 992px) and (max-width: 1199px) { 
padding: 3rem 0;
}
`

export const ContainerRight = styled.div`
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
border-radius:   50% 0px 0px  0px ;
background: linear-gradient(
    135deg,
    rgba(127, 15, 16, 0.1) 25%,
    rgba(127, 15, 16, 0.25) 40%,
    rgba(127, 15, 16, 0.45) 70%
  );
  border-left: 30px solid ${theme.colors.primary};
img{
    max-height: 590px;
    object-fit: cover;
    border-radius: 20px;
    border-right: 10px solid ${theme.colors.primary} ;
}
@media (min-width: 992px) and (max-width: 1199px) { 

  padding:  3rem  ;
img{
  max-height: 400px;
  object-fit: fill;
}
}
`

export const ContainerLeft = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
padding: 2rem;
border-right: 30px solid ${theme.colors.primary};
border-radius:  0px  0px 50% 0px ;
background: linear-gradient(
    -135deg,
    rgba(127, 15, 16, 0.1) 25%,
    rgba(127, 15, 16, 0.25) 40%,
    rgba(127, 15, 16, 0.45) 70%
  );
h2{
    text-align: center;
    color: ${theme.colors.dark};
    font-size: 3rem;
    font-family: 'Gotham-Black';
    
}
p{

    color: ${theme.colors.light};
    font-size: 2.5rem;
    font-family: 'Gotham-Light';
    text-align: center;
    
}

@media (min-width: 992px) and (max-width: 1199px) { 
justify-content: flex-start;
padding:  8rem 0 ;

  h2 {
    font-size: 1.5rem;
  }
p {
    font-size: 1.2rem;
}}
`
