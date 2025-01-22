import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/globalStyles.js';

import './fonts/Gotham-Bold.otf';
import './fonts/Gotham-Black.otf';
import './fonts/Gotham-Light.otf';
import './fonts/GothamLight.ttf';
import Home from './containers/Home/index.jsx';
import WhoSession from './containers/Who/index.jsx';
import MyServices from './containers/MyServices/index.jsx';
import BlogSession from './containers/Blog/index.jsx';
import Footer from './containers/Footer/index.jsx';
import Feedback from './containers/FeedBack/index.jsx';
import Rights from './components/Rights/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
    <WhoSession />
    <MyServices />
    <BlogSession />
    <Feedback />
    <Footer />
    <Rights />
  </StrictMode>
)
