import styled from "styled-components"
import { theme } from "../../styles/theme"



export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
gap: 0.5rem;
background-color: ${theme.colors.secondary};

@media (min-width: 992px) and (max-width: 1199px) { 
padding-top: 2rem;
}
@media (min-width: 768px) and (max-width: 991px) {


}
`

export const ContainerRight = styled.div`
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
    max-height: 420px;
    object-fit: cover;
    border-radius: 20px;
    border-right: 10px solid ${theme.colors.primary} ;
}
@media (min-width: 992px) and (max-width: 1199px) { 

  padding: 4rem 0;
img{
  max-height: 400px;
  object-fit: fill;
}
}

@media (min-width: 768px) and (max-width: 991px) {
height: 65vh;
img {
  max-height: 300px;
}

}

@media (min-width: 481px) and (max-width: 767px) { 
  height: 80vh;
img {
  max-height: 300px;
}

}

`

export const ContainerLeft = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
padding: 6rem;
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
    font-size: 2.2rem;
    font-family: 'Gotham-Black';
    
}
p{

    color: ${theme.colors.light};
    font-size: 1.6rem;
    font-family: 'Gotham-Light';
    text-align: center;
    
}

@media (min-width: 992px) and (max-width: 1199px) { 
justify-content: flex-start;
padding:  4rem 0 ;

  h2 {
    font-size: 1.5rem;
  }
p {
  max-width: 90%;
    font-size: 1.2rem;
}}

@media (min-width: 768px) and (max-width: 991px) {
padding: 1rem;
height: 65vh;
gap: .8rem;
h2{
    font-size: 1.5rem;
}
p {
  font-size: 1.2rem;
}
}

@media (min-width: 481px) and (max-width: 767px) { 
  padding: 1rem;
height: 80vh;
gap: .8rem;
  
  h2{
    font-size: 1.5rem;
}
p {
  font-size: 1rem;
}
}
`
