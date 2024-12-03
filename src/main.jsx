import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles.js'
import Home from './containers/Home/index.jsx'

import './fonts/Gotham-Bold.otf'
import './fonts/Gotham-Black.otf'
import './fonts/Gotham-Light.otf'
import './fonts/GothamLight.ttf'
import WhoSession from './containers/Who/index.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home/>
  </StrictMode>
)
