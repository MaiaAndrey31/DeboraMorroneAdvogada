import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
position: relative;
display: flex;
justify-content: space-between;
padding: 1rem;
min-width: 100%;
z-index: 2;
background-color: rgb(51,51,51, 0.8);




`

export const ContainerLeft = styled.div`
display: flex;
width: 70vw;
justify-content: space-between;
align-items: center;
.logo {
    max-width: 270px;
}

ul {
    display: flex;
    gap: 2rem;
    padding-right: 3rem;
    
    :hover {
            cursor: pointer;
            color: ${theme.colors.secondary};
            transform: scale(1.01);
            transition: all ease-in-out 0.4s;
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


`
