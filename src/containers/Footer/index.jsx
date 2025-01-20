import {
  Contact,
  Container,
  ContainerCenter,
  ContainerLeft,
  ContainerRight
} from './style'
import Logo from '../../assets/logo.png'

import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { theme } from '../../styles/theme'
import { Button } from '../../components/Button'

export default function Footer() {
  return (
    <Container>
      <ContainerLeft>
<img src={Logo} alt="Logo" /> {/* Added alt attribute */}
        <Contact>
        <a href="https://www.instagram.com/deboramorrone.adv?igsh=bmc3NGZsM2x4cTN0" target="_blank">

          <InstagramIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>Instagram</p>
          </a>
        </Contact>
        <Contact>
          
        </Contact>
      </ContainerLeft>
      <ContainerCenter>
        <p>Home</p>
        <p> Sobre mim</p>
        <p>Serviços</p>
        <p>Contato</p>
      </ContainerCenter>
      <ContainerRight>
        <Contact>
        <a href="https://wa.me/5511976008146/?text=Ola!%20Gostaria%20de%20mais%20informações" target='_blank'>

          <PhoneIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>(11) 97600-8146</p>
          </a>
        </Contact>
        <Contact>
        <a href="mailto:deboramorrone@adv.oabsp.org.br" >

          <EmailIcon
            style={{
              fontSize: 40,
              color: `${theme.colors.secondary}`,
              fontWeight: 'bold'
            }}
            className="icon"
          />
          <p>deboramorrone@adv.oabsp.org.br</p>
          </a>
        </Contact>
        <Button>Entrar em Contato</Button>{' '}
      </ContainerRight>
    </Container>
  )
}
