import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    max-width: 100%;
    height: auto;
    a {
        text-decoration: none;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        width: auto;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 480px) { 
        body {
            font-size: 14px; 
        }
        .container {
            padding: 10px; 
        }
        .profile {
            display: flex;
            flex-direction: column; 
            align-items: center;
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        body {
            width: 100vw;
            font-size: 16px; 
        }
        .container {
            padding: 15px; 
        }
    }
}

::-webkit-scrollbar{
    background-color: ${theme.colors.secondary};
    width: 12px;
}

::-webkit-scrollbar-thumb{
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.light};
    border-radius: 50px;
}
@font-face {
 font-family: "Gotham-Bold";
 src: local("Gotham-Bold"),
  url("./src/fonts/Gotham-Bold.otf") format("truetype");
 font-weight: bold;
}
@font-face {
 font-family: "Gotham-Black";
 src: local("Gotham-Black"),
  url("./src/fonts/Gotham-Black.otf") format("truetype");
 font-weight: black;
}
@font-face {
 font-family: "Gotham-Light";
 src: local("Gotham-Light"),
  url("./src/fonts/Gotham-Light.otf") format("truetype");
 font-weight: light;
}
@font-face {
 font-family: "GothamLight";
 src: local("GothamLight"),
  url("./src/fonts/GothamLight.ttf") format("truetype");
 font-weight: thin;
}

.font-face-gm {
    font-family: "Gotham-Bold, Gotham-Black, Gotham-Light, GothamLight";
} `
