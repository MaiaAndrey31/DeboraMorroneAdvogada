import {
  Contact,
  Container,
  ContainerCenter,
  ContainerLeft,
  ContainerRight
} from './style'
import Logo from '../../assets/logo.png'

import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import { theme } from '../../styles/theme'
import { Button } from '../../components/Button'

export default function Footer() {
  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt="" />
        <Contact>
          <InstagramIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>Instagram</p>
        </Contact>
        <Contact>
          <YouTubeIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>You Tube</p>
        </Contact>
      </ContainerLeft>
      <ContainerCenter>
      <p>(11) 98877-6655</p>
      <p>(11) 98877-6655</p>
      <p>(11) 98877-6655</p>
      <p>(11) 98877-6655</p>

    
      </ContainerCenter>
      <ContainerRight>
      <Contact>
          <PhoneIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>(11) 98877-6655</p>
        </Contact>
        <Contact>
          <EmailIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>deboraadvogada@adv.com.br</p>
        </Contact>
<Button>Entrar em Contato</Button>      </ContainerRight>
    </Container>
  )
}
