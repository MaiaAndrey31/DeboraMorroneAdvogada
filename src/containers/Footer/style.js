import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;

  background-color: ${theme.colors.dark};

  a {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: auto;
    width: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    flex-direction: column; // Stack elements vertically
    height: auto; // Adjust height for mobile
    padding: 1rem; // Adjust padding for mobile
  }
`

export const ContainerLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${theme.colors.primary};
  border-radius: 30px 100000px 100px 10000px;

  a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    padding-left: 0.6rem;
  }

  img {
    max-width: 250px;
    padding: 0.6rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    object-fit: fill;

    align-items: flex-start;

    img {
      width: 190px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    object-fit: fill;
    width: 100%;

    img {
      width: 290px;
    }
  }

  @media (max-width: 480px) {
    width: 100%; // Full width on mobile
    img {
      max-width: 70%; // Responsive image
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
  }
`

export const ContainerCenter = styled.div`
  width: 30%;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${theme.colors.light};
    font-family: 'Gotham-Light';
    font-weight: light;
    font-size: 1.4rem;
    text-decoration: none;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    object-fit: fill;
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%; // Full width on mobile
    p {
      font-size: 1rem; // Adjust font size for mobile
    }
  }
`

export const ContainerRight = styled.div`
  width: 30%;
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 480px) {
    height: auto;
    min-width: 100%;
    align-items: center; // Full width on mobile
  }
  @media (min-width: 768px) and (max-width: 991px) {
    object-fit: fill;
    width: 100%;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    min-width: 100%;
    align-items: center;
  }
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  p {
    color: ${theme.colors.light};
    font-family: 'Gotham-Light';
    font-weight: light;
    font-size: 1.4rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    object-fit: fill;
    width: 100%;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    p {
      font-size: 1rem; // Adjust font size for mobile
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    width: 100%;
    a {
      flex-direction: column;
      align-items: center;
    }
  }
`
