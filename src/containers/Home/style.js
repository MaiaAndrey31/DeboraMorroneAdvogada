import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: auto;
  padding-bottom: 4rem; /* Adjusted for better spacing on smaller screens */
  @media (max-width: 768px) {
    padding-bottom: 2rem; /* Further adjust for tablets */
  }
  width: 100%;

  @media (min-width: 1200px) and (max-width: 1919px) {
    padding-bottom: 2rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;

    height: auto;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    height: auto;
    min-width: 100%;
  }
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: max-content;
  min-height: calc(100vh - 120px);

  video {
    position: fixed;
    top: 0;
    object-fit: cover;

    @media (min-width: 1200px) and (max-width: 1919px) {
      object-fit: cover;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      object-fit: fill;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      height: 100%;
      max-width: min-content;
      object-fit: cover;
      overflow-x: hidden;
    }

    @media (min-width: 300px) and (max-width: 480px) {
      overflow-x: hidden;
      object-fit: fill;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      overflow-x: hidden;
    }
  }
  @media (min-width: 300px) and (max-width: 480px) {
    height: 100vh;
    min-width: 100vw;
  }

  .mascara-video {
    height: 100%;
    width: 100vw;
    position: fixed;
    top: 0;
    background: linear-gradient(
      109deg,
      rgba(10, 12, 16, 0.8) 15%,
      rgba(10, 12, 16, 0.3) 50%,
      rgba(10, 12, 16, 0.8) 85%
    );
  }
`

export const HomeContent = styled.div`
  display: flex;
  padding: 3.999rem 0rem;

  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  width: 100%;
  :hover {
    cursor: pointer;
    transition: ease-in-out 0.5s;
    transform: scale(0.99);
    opacity: 0.79;

    span {
      color: ${theme.colors.primary};
    }
  }

  p {
    max-width: 70%;
    position: relative;
    font-family: 'Gotham-Light';
    font-size: 2rem;
    color: ${theme.colors.light};
  }

  div {
    width: 100%;
    max-width: 480px;
    height: 52px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.primary};
    border-radius: 8px;

    button {
      font-size: 22px;
      text-shadow: none;
      background-color: transparent;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 300px) and (max-width: 480px) {
    p {
      font-size: 1rem;
    }

  }
  @media (min-width: 481px) and (max-width: 767px) {
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    justify-content: flex-start;
    gap: 1.2rem;
    padding: 2rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    gap: 0.8rem;
    padding: 1rem;
    p {
      font-size: 1.5rem;
    }
  }
`

export const HomeTitle = styled.h1`
  max-width: 80%;
  position: relative;
  font-family: 'Gotham-Black';
  font-size: 6rem;
  color: ${theme.colors.light};
  span {
    color: ${theme.colors.secondary};
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 4.8rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 2.2rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
  }
  @media (min-width: 300px) and (max-width: 480px) {
    
      font-size: 2rem;
    
  }
`
