import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.colors.dark};
  display: flex;

  align-items: center;
  justify-content: center;
`

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-left: 6rem;

  background: linear-gradient(
    -145deg,
    rgba(51, 51, 51, 0.01) 15%,
    rgba(51, 51, 51, 0.2) 60%,
    rgba(51, 51, 51, 0.4) 95%
  );


  h2 {
    color: ${theme.colors.secondary};
    font-size: 4rem;
    text-align: center;

    font-family: 'Gotham-Black';
  }
  

  p {
    color: ${theme.colors.light};
    font-size: 28px;
    letter-spacing: 0.1rem;
    max-width: 90%;
    text-align: center;
    font-family: 'Gotham-Light';
  }
`

export const ContainerRight = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
    align-items: center;
    justify-content: center;
  background: linear-gradient(
    103deg,
    rgba(127, 15, 16, 0.01) 15%,
    rgba(127, 15, 16, 0.5) 40%,
    rgba(127, 15, 16 , 0.5) 95%
  );

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border: 18px inset ${theme.colors.secondary};

      height: 680px;
      width: 520px;
      border-radius: 50%;
    }
  }
`
