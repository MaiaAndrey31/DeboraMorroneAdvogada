import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 80px;
  z-index: 1;
  background-color: rgb(51, 51, 51, 0.2);
`

export const ContainerLeft = styled.div`
  display: flex;
  width: 50%;
  gap: 43rem;
  align-items: center;
  margin-left: 1rem;
 

  

    :hover {
      cursor: pointer;
      color: ${theme.colors.secondary};
      transform: scale(1.01);
      transition: all ease-in-out 0.3s;
    
  }
`
export const ContainerRight = styled.div`
display: flex;
align-items: start;
justify-content: left;
.logo {
    max-width: 270px;

  }

:hover{
    cursor: pointer;
    transform: scale(.995);
    transition: ease-in-out 0.3s;
    opacity: .89;
}

`
