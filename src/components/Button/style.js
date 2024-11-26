import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const     ContainerButton
= styled.button`
position: relative;
display: flex;
gap: 8px;
padding: 5px 15px;
align-items: center;
justify-content: center;
  width: 100%;
  max-width: 480px;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.light};
  font-family: 'Gotham-Black';
  font-size: 20px;
  text-shadow:  1px  2px 4px ${theme.colors.dark};


.icon{
opacity: .8;
font-size: 30px;

}


`
