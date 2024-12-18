import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    max-width: 100%;


}

::-webkit-scrollbar{
    background-color: ${theme.colors.secondary};
    width: 10px;
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
}
`
