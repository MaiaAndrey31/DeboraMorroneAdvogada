import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
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

    min-width: 100%;
    min-height: 100%;
  }

  .mascara-video {
    height: 100%;
    width: 100%;
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
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
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
    font-size: 22px;
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
`

export const HomeTitle = styled.h1`
  max-width: 80%;
  position: relative;
  font-family: 'Gotham-Black';
  font-size: 5rem;
  color: ${theme.colors.light};
  span {
    color: ${theme.colors.secondary};
  }
`
