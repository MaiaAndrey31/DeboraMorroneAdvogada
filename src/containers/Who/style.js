import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
min-height: 100vh;
max-width: 100vw;
background-color: ${theme.colors.light};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`