import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 80px;
  z-index: 1;
  background-color: rgb(51, 51, 51, 0.2);
`

export const ContainerLeft = styled.div`
  display: flex;
  width: 50%;  
  align-items: center;
  margin-left: .5rem;
 
  .logo {
    max-width: 270px;

    

  }
  

    :hover {
      cursor: pointer;
      color: ${theme.colors.secondary};
      transform: scale(1.01);
      transition: all ease-in-out 0.3s;
    
  }

  @media (min-width: 992px) and (max-width: 1199px) { 
      .logo {
        width: 200px;
      }
    }
`
export const ContainerRight = styled.div`
display: flex;
align-items: end;
justify-content: center;
margin-right: 2rem;



:hover{
    cursor: pointer;
    transform: scale(.995);
    transition: ease-in-out 0.3s;
    opacity: .89;
}

`
