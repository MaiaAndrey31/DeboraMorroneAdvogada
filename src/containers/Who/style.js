import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.colors.dark};
  display: flex;

  align-items: center;
  justify-content: center;


  @media (min-width: 481px) and (max-width: 767px) {
  flex-direction: column ;
  height: auto;

}
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
    font-size: 24px;
    letter-spacing: 0.11rem;
    line-height: 1.9rem;
    max-width: 90%;
    text-align: center;
    font-family: 'Gotham-Light';
  }

      @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    width: 100%;
    
        h2 {
      font-size: 1.5rem;
    }

    p{
      font-size: 1rem;
    }
    
      }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 5rem .225rem;
    h2 {
      font-size: 2.3rem;
      text-align: center;
    }

    p {
      font-size: 1.4rem;
      letter-spacing: 0.01rem;
      line-height: 1.6rem;
      max-width: 80%;
      text-align: center;
      margin-left: 10px;
    }
  }
`

export const ContainerRight = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    103deg,
    rgba(127, 15, 16, 0.01) 15%,
    rgba(127, 15, 16, 0.4) 40%,
    rgba(127, 15, 16, 0.5) 95%
  );

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border: 8px inset ${theme.colors.secondary};
      object-fit: cover;
      height: 580px;
      width: 420px;
      border-radius: 50%;
    }


    @media (min-width: 992px) and (max-width: 1199px) {
      gap: 1.3rem;
      
      img {
        width: 360px;
        height: 580px;
      }
    }
  }

  
  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    min-width: 100%; 
    padding: 2rem;

    div {
      min-width: 100%;
      align-items: center;
    justify-content: center;
    }
  }
`
