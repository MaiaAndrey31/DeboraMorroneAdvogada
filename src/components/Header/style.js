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
  background-color: rgb(51, 51, 51, 0.8);
`

export const ContainerLeft = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  .logo {
    max-width: 270px;
  }

  ul {
    display: flex;
    gap: 5rem;
    padding-right: 3rem;
    flex-wrap: wrap;

    :hover {
      cursor: pointer;
      color: ${theme.colors.secondary};
      transform: scale(1.01);
      transition: all ease-in-out 0.3s;
    }
    li {
      display: flex;
      
      justify-content: space-around;
      font-family: 'Gotham-Light';
      font-size: 20px;
      color: ${theme.colors.light};
    }
  }
`
export const ContainerRight = styled.div`
// width: 250px;
margin-right: 70px;

:hover{
    cursor: pointer;
    transform: scale(.995);
    transition: ease-in-out 0.3s;
    opacity: .89;
}

`
